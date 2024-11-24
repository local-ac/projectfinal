// src/PaperPokemon.tsx
import Navbar from './Navbar';
import './About.css';

function About() {
  return (
    <div className="paper-pokemon-containerz">
      <Navbar />
      <h1 className="paper-titlez">COLLEGE OF  ENGINEERING AND TECHNOLOGY</h1>
      <p className="paper-contentz">
      <img src="https://cite.dpu.ac.th/img/logo-cite-edit.jpg?t=1" alt="test" width="300" height="200"/>
      </p>
      <p className="paper-contentz">
        CT648
      </p>
      <p className="paper-contentz">
        รหัสนักศึกษา : 66130757
      </p>
      <p className="paper-contentz">
        คณะวิศวกรรมคอมพิวเตอร์ สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยธุรกิจบัณฑิตย์
      </p>
      <p className="paper-contentz">
        Master of Engineering (Computer Engineering)
        </p>
      <p className="paper-contentz">
        Web and Cloud EngineeringWeb server, CI/CD framework and DevOps, Infrastructure automation: Ansible or Puppet or Chef, Implement web on public cloud AWS or GCP or Azure.
      </p>
      <p className="paper-contentz">
      อาจารย์ที่ปรึกษา: ผู้ช่วยศาสตราจารย์ ดร.ชัยพร เขมะภาตะพันธ์
      </p>
      <p className="paper-contentz">
      ตำแหน่ง: ผู้อำนวยการหลักสูตร สาขาวิชาวิศวกรรมคอมพิวเตอร์ วิทยาลัยวิศวกรรมศาสตร์และเทคโนโลยี
      </p>
      <p className="paper-contentz">
        About Project [Github]
      </p>
      <p className="paper-contentz">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              View Code on GitHub
            </a>
      </p>
    </div>
  );
}

export default About;
