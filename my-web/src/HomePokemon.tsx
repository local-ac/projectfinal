import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './HomePokemon.css';
import { FaSearch } from 'react-icons/fa';

function HomePokemon() {
  const [search, setSearch] = useState('Charizard'); // คำที่ใช้ค้นหา
  const [suggestions, setSuggestions] = useState<string[]>([]); // รายการ Auto-complete
  const [pokemonData, setPokemonData] = useState<any>(null); // ข้อมูล Pokémon ที่ค้นเจอ
  const [error, setError] = useState(''); // ข้อผิดพลาด
  const [chartType, setChartType] = useState('progress'); // เลือกรูปแบบการแสดงผลกราฟ

  // ดึงข้อมูล Auto-complete ทุกครั้งที่คำค้นเปลี่ยน
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (search.trim() === '') {
        setSuggestions([]); // หากไม่มีคำค้น ให้ล้างรายการ Auto-complete
        return;
      }
      try {
        const response = await fetch(`/api/pokemon?search=${search}`);
        if (!response.ok) throw new Error('Failed to fetch suggestions');
        const data = await response.json();
        setSuggestions(data.map((item: any) => item.name)); // แปลงข้อมูลเป็นรายการชื่อ
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]); // กรณีดึงข้อมูลล้มเหลว
      }
    };
    fetchSuggestions();
  }, [search]);

  // ฟังก์ชันค้นหา Pokémon
  const handleSearch = async () => {
    setError('');
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      if (!response.ok) throw new Error('Pokémon not found');
      const data = await response.json();
      setPokemonData(data); // เก็บข้อมูล Pokémon
    } catch (error) {
      setPokemonData(null);
      setError('Pokémon not found. Please try another name.');
    }
  };

  // ฟังก์ชันสำหรับการสร้าง Radial Chart
  const drawRadarChart = (ctx: CanvasRenderingContext2D, stats: any) => {
    const maxStat = 150; // ค่าสูงสุดของพลัง
    const radius = 90; // รัศมีของกราฟ
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const angleStep = (2 * Math.PI) / stats.length;
  
    // รีเซ็ต Canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
    // วาดวงกลมฐาน (วงรอบกราฟ)
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(59, 76, 202, ${0.1 * i})`; // วงกลมจางลงทีละชั้น
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  
    // วาดเส้นแบ่งมุม
    stats.forEach((_: any, i: number) => {
      const x = centerX + radius * Math.cos(angleStep * i);
      const y = centerY + radius * Math.sin(angleStep * i);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#bbb';
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  
    // วาดกราฟ Radar
    ctx.beginPath();
    stats.forEach((stat: any, i: number) => {
      const value = stat.base_stat;
      const x = centerX + (radius * (value / maxStat)) * Math.cos(angleStep * i);
      const y = centerY + (radius * (value / maxStat)) * Math.sin(angleStep * i);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(59, 76, 202, 0.3)';
    ctx.fill();
    ctx.strokeStyle = '#3b4cca';
    ctx.lineWidth = 2;
    ctx.stroke();
  
    // วาดค่าพลังและป้ายชื่อรอบกราฟ
    ctx.font = '12px Arial';
    ctx.fillStyle = '#000';
    stats.forEach((stat: any, i: number) => {
      const label = stat.stat.name.toUpperCase();
      const value = stat.base_stat;
  
      const xLabel = centerX + (radius + 20) * Math.cos(angleStep * i);
      const yLabel = centerY + (radius + 20) * Math.sin(angleStep * i);
      const xValue = centerX + (radius * (value / maxStat)) * Math.cos(angleStep * i);
      const yValue = centerY + (radius * (value / maxStat)) * Math.sin(angleStep * i);
  
      // วาดชื่อสเตตัส
      ctx.fillStyle = '#3b4cca';
      ctx.font = '10px Arial';
      ctx.fillText(label, xLabel - ctx.measureText(label).width / 2, yLabel);
      // วาดค่าพลัง
      ctx.beginPath();
      ctx.arc(xValue, yValue, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffcb05';
      ctx.fill();
      ctx.strokeStyle = '#3b4cca';
      ctx.stroke();
    });
  };
  
  
  

  useEffect(() => {
    if (pokemonData && chartType === 'radial' && pokemonData.stats) {
      const canvas = document.getElementById('radial-chart') as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          drawRadarChart(ctx, pokemonData.stats);
        }
      }
    }
  }, [pokemonData, chartType]);

  
  


  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="search-container">
          <h1 className="title">Pokémon Search</h1>
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter Pokémon Name"
              list="pokemon-suggestions" // ใช้ datalist เพื่อแสดง Auto-complete
            />
            <datalist id="pokemon-suggestions">
              {suggestions.map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>
            <button className="search-button" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}
        {pokemonData && (
          <div className="pokemon-card-horizontal">
            <div className="pokemon-image-section">
              <img
                className="pokemon-image"
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
            </div>
            <div className="pokemon-info-section">
              <h2 className="pokemon-name">
                {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
              </h2>
              <div className="pokemon-info-details">
                <p><strong>Weight:</strong> {pokemonData.weight / 10} kg</p>
                <p><strong>Height:</strong> {pokemonData.height / 10} m</p>
                <p><strong>Type:</strong> {pokemonData.types.map((type: any) => type.type.name).join(', ')}</p>
                <p><strong>Abilities:</strong> {pokemonData.abilities.map((ability: any) => ability.ability.name).join(', ')}</p>
              </div>

              {/* ตัวเลือกการแสดงผลกราฟ */}
              <div className="chart-toggle">
                <button onClick={() => setChartType('progress')}>Progress Bar</button>
                <button onClick={() => setChartType('radial')}>Radial Chart</button>
              </div>

              {/* แสดงกราฟ */}
              {chartType === 'radial' ? (
  <div className="radial-chart-container">
    <strong>Stats:</strong>
    <canvas id="radial-chart" width="250" height="250"></canvas>
  </div>
) : (
  <div className="pokemon-stats">
    <strong>Stats:</strong>
    {pokemonData.stats.map((stat: any) => (
      <div key={stat.stat.name} className="stat-item">
        <span>{stat.stat.name}: </span>
        <progress max="100" value={stat.base_stat} />
        <span>{stat.base_stat}</span>
      </div>
    ))}
  </div>
)}

            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HomePokemon;
