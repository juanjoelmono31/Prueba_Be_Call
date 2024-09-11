import React, { useState } from 'react';

function ContarPalabras() {
    //Aqui utilizo el useState() para manejar los estados del texto y en numero de palabras 
    const [text, setText] = useState('');
    const [contarPalabra, setcontarPalabra] = useState(0);

    const contadorPalabra = (inputText) => {
        //Aqui separo los espacios contando loes del final y el inicio y los divido para contar las palabras

        const words = inputText.trim().split(/\s+/);
        return words.filter(word => word.length > 0).length;
    };

    //aca se actuliza el estado y el contador de palabras 
    const Cambiar = (e) => {
        const newText = e.target.value;
        setText(newText);
        setcontarPalabra(contadorPalabra(newText));
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Contar Palabras</h2>
            <textarea 
                value={text}
                onChange={Cambiar}
                placeholder="Ingresa tu texto"
                style={styles.textarea}
            />
            <p style={styles.contarPalabra}>Cantidad de palabras: {contarPalabra}</p>
        </div>
    );
}

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

export default ContarPalabras;
