import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const hexColorPatternWithHash = /^#[0-9A-Fa-f]{6}$/;
    const hexColorPatternWithoutHash = /^[0-9A-Fa-f]{6}$/;

    if (!name || !color) {
      setError('Los datos no pueden ser vacíos. Por favor, completa el formulario');
    } else if (name.length < 3 || name.startsWith(' ') || (!hexColorPatternWithHash.test(color) && !hexColorPatternWithoutHash.test(color))) {
      setError('Por favor, comprueba que la información sea correcta');
    } else {
      setError('');
      setSubmitted(false);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);

        if (hexColorPatternWithoutHash.test(color)) {
          setColor(`#${color}`);
        }
      }, 2000);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Ingresa tu nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="input-group">
          <label>Ingresa tu color favorito:</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Ingresa tu color favorito (formato HEX)"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Estamos cargando tu color...</p>
        </div>
      )}
      {submitted && !error && <Card name={name} color={color.startsWith('#') ? color : `#${color}`} />}
    </div>
  );
};

export default Form;