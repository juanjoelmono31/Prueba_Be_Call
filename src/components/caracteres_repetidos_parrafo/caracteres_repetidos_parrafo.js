import React, { useState } from 'react';

const ContadorPalabrasParrafo = () => {
//Aqui utilizo el useState() para majeta los dos estados 
  const [text, setText] = useState('');
  const [contarPalabra, setcontarPalabra] = useState({});

  //Aqui convertimos el text en minusculas, tambien se eliminan caracteres, tambien divide las palabras y por ultomo cuenta las palabras  
  const ContarPalabras = (inputText) => {
    const words = inputText.toLowerCase().replace(/[^a-zA-Z\s]/g, '').split(/\s+/);
    
    const counts = {};
    words.forEach(word => {
      if (word) {
        counts[word] = (counts[word] || 0) + 1;
      }
    });

    return counts;
  };

  const Cambiar = (event) => {
    const newText = event.target.value;
    setText(newText);
    setcontarPalabra(ContarPalabras(newText));
  };

  return (
    <div style= {styles.container}>
        <h2 style={styles.title}>Cantidad de veces que se repiten las palabras de un párrafo</h2>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={Cambiar}
        placeholder="Ingresa tu texto "
        style={styles.textarea}
      />
      <div>
        <h2 style={styles.contarPalabra}>Conteo de palabras:</h2>

        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
  {Object.entries(contarPalabra).map(([word, count]) => (
    <li
      key={word}
      style={{
        backgroundColor: '#f4f4f4',
        border: '1px solid #ddd',
        borderRadius: '4px',
        border: 'none',
        outline: 'none',
        padding: '10px',
        marginBottom: '1s5px',
        fontSize: '16px',
        color: '#333'
      }}
    >
      <span style={{ fontWeight: 'bold' }}>{word}:</span> {count}
    </li>
  ))}
</ul>
      </div>
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
    textarea: {
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

export default ContadorPalabrasParrafo;
