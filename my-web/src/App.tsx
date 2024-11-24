import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import HomePokemon from './HomePokemon';
import PaperPokemon from './PaperPokemon';
import TopPokemon from './TopPokemon';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/loginadmin" element={<AdminLogin />} />
        <Route path="/homepokemon" element={<HomePokemon />} />
        <Route path="/paperpokemon" element={<PaperPokemon />} />
        <Route path="/toppokemon" element={<TopPokemon />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
