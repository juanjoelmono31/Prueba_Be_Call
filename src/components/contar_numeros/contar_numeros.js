import React, { useState } from 'react';

// aqui utilizo esta funcion para contar los numeros en la cadena de texto, 
const countarNumerosInString = (text) => {
  const matches = text.match(/\d+/g);
  return matches ? matches.length : 0;
};


const ContarNumeros = () => {
    //Aqui estoy utilizando el useState() para mejar el estado del texto y en numero 
    const [text, setText] = useState('');
    const [numberCount, setNumberCount] = useState(0);

//Aqui estoy utilizando esta funcion que se activa cada ves que el usurio escribe y reliza el conteo de numeros dentro de la cadena de texto 
const Cambio = (event) => {
    const newText = event.target.value;
    setText(newText);
    setNumberCount(countarNumerosInString(newText));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contador de Números en Textos</h2>
      <input
        type="text"
        value={text}
        onChange={Cambio}
        placeholder="Ingresa tu texto "
        style={styles.input}
      />
      <p style={styles.contarPalabra}>Cantidad de números: {numberCount}</p>
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
    input: {
        width: '90%',
        height: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        outline: 'none',
        marginBottom: '10px',
    },
    contarPalabra: {
        fontSize: '18px',
        color: '#333',
    },
    title: {
        color: '#333',
        textAlign: 'center',
    },
};

export default ContarNumeros;
