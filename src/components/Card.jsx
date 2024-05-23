import React from 'react';

const Card = ({ name, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h2>Hola {name}</h2>
      <p>Sabemos que tu color favorito es:</p>
      <p><strong>{color}</strong></p>
    </div>
  );
}

export default Card;