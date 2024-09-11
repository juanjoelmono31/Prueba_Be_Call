import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/cadena">Cadena Invertida</Link></li>
        <li><Link to="/repetido">Caracteres Repetidos</Link></li>
        <li><Link to="/contador">Contador de palabras </Link></li>
        <li><Link to="/contadorNum">Contador de Numeros</Link></li>
        <li><Link to="/contadorParrafo">Cantidad de veces que se repiten las palabras </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;