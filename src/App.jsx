import React from 'react';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <img src="https://cdn.icon-icons.com/icons2/1261/PNG/512/1496676744-rounded-high-ultra-colour15-palette_84629.png" alt="paleta de colores" />
      <h1>¡Hola!</h1>
      <h2>Escribe tu color favorito HEX</h2>
      <Form />
    </div>
  );
};

export default App;