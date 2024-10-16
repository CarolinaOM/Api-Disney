import React, { useState, useEffect } from 'react';

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/personajes') // Endpoint del servidor
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la red');
        }
        return response.json();
      })
      .then(data => {
        setPersonajes(data.characters); // Establece los personajes recibidos
      })
      .catch(error => console.error('Error al obtener personajes:', error));
  }, []);

  return (
    <div className="App">
      <h1>Lista de personajes de Disney</h1>
      <ul>
        {personajes.map((personaje, index) => (
          <li key={index}>
            <h2>{personaje.name}</h2> {/* Mostrar solo el nombre */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
