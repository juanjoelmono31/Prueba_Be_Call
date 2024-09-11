import React, { useState } from 'react';


const CaracteresRepetidos = () => {

//Aqui utilizo el useState() para manejar 3 estados 
  const [texto, setTexto] = useState('');
  const [caracter, setCaracter] = useState('');
  const [contador, setContador] = useState(0);

  const contarRepeticiones = (cadena, char) => {
    return cadena.split(char).length - 1;
  };

  const Contar = () => {
    setContador(contarRepeticiones(texto, caracter));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contar Caracteres Repetidos</h2>
      <input 
        type="text" 
        placeholder="Ingresa el texto" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        style={styles.inputField} 
      />
      <input 
        type="text" 
        placeholder="Ingresa el caracter" 
        maxLength="2" 
        value={caracter} 
        onChange={(e) => setCaracter(e.target.value)} 
        style={styles.inputField} 
      />
      <button onClick={Contar} style={styles.button}>
        Contar
      </button>
      <p>El caracter "{caracter}" se repite {contador} veces</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '10%',
    
  },
  title: {
    color: '#333',
    textAlign: 'center',
  },
  inputField: {
    margin: '10px',
    padding: '5px',
    width: '200px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#ccffbc',
    border: 'none',
    borderRadius: '5px',
  },
};

export default CaracteresRepetidos;
