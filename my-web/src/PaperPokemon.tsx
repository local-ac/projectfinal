// src/PaperPokemon.tsx
import Navbar from './Navbar';
import './PaperPokemon.css';

function PaperPokemon() {
  return (
    <div className="paper-pokemon-container">
      <Navbar />
      <h1 className="paper-title">Pokémon Article</h1>
      <p className="paper-content">
      Pokémon is one of the most popular franchises in the world, originating in 1996 from Game Freak and Nintendo. The Pokémon universe has evolved continuously, expanding into various media, including games, cartoons, anime, and merchandise.

In the Pokémon world, players take on the role of a "Trainer," whose primary objective is to catch and train Pokémon to become stronger. Catching Pokémon is done using Poké Balls, the main tool for capturing these creatures. Battles between Pokémon are a crucial aspect of the game, with each Pokémon having different types and abilities. For example, Water-type Pokémon have an advantage over Fire-type Pokémon, adding a strategic layer to the gameplay.

The success of Pokémon extends beyond the games; it stems from the creation of adorable and charismatic characters, such as Pikachu, who has become a symbol of the franchise and a beloved figure worldwide. 
      </p>
    </div>
  );
}

export default PaperPokemon;
