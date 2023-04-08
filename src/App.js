import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Portofolio from './components/Portfolio';
import Home from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portofolio" element={<Portofolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
