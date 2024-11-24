import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-content">
        <div className="navbar-logo-container">
          <Link to="/" className="navbar-logo">
            Pokémon World
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/homepokemon" className="navbar-link">
            Home
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/paperpokemon" className="navbar-link">
            Pokémon Article
          </Link>
          <Link to="/toppokemon" className="navbar-link">
            Top Pokémon
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
