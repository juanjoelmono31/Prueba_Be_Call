import React, { useState } from 'react';
import './cadena.css'

const InvertirCadena = () => {
    const [inputValue, setInputValue] = useState('');
    const [cadenaInvertida, setCadenaInvertida] = useState('');
  
    // Esta es la funcion que utilizo para invertir el array con .reverse()
    const invertirCadena = (cadena) => {
      return cadena.split('').reverse().join('');
    };
  
    // Aqui utilizamos el useState() para los valores de entrada 
    const Cambio = (e) => {
      const valor = e.target.value;
      setInputValue(valor);
      setCadenaInvertida(invertirCadena(valor));
    };
  
    return (
      
        <div className="container">
            <h2>Invertir Cadena</h2>
            <input
            type="text"
            value={inputValue}
            onChange={Cambio}
            placeholder="Ingresa caracteres a convertir"
            />
            <p>Cadena invertida: {cadenaInvertida}</p>
        </div>
      
    );
  };
  
  export default InvertirCadena;