import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Cadena from '../src/components/cadena/cadena.js';
import CaracterRepetido from './components/caracter_repetido/caracter_repetido.js';
import ContarPalabras from './components/contar_palabras/contar_palabras.js';
import ContarNumeros from './components/contar_numeros/contar_numeros.js';
import CaracteresRepetidosParrafo from './components/caracteres_repetidos_parrafo/caracteres_repetidos_parrafo.js';
import Inicio from './components/inicio/inicio.js'

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cadena" element={<Cadena />} />
        <Route path="/repetido" element={<CaracterRepetido />} />
        <Route path="/contador" element={<ContarPalabras />} />
        <Route path="/contadorNum" element={<ContarNumeros />} />
        <Route path="/contadorParrafo" element={<CaracteresRepetidosParrafo />} />
      </Routes>
    </Router>
  );
}

export default App;

