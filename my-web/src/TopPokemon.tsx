// src/TopPokemon.tsx
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './TopPokemon.css';

function TopPokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
      const data = await response.json();
      setPokemonList(data.results);
    };
    fetchPokemonList();
  }, []);

  return (
    <div className="top-pokemon-container">
      <Navbar />
      <h1 className="title">Top 12 Pokémon</h1>
      <div className="pokemon-list">
        {pokemonList.map((pokemon: any, index) => (
          <div key={index} className="pokemon-card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
              className="pokemon-image"
            />
            <p className="pokemon-name">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPokemon;
