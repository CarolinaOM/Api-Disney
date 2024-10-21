import React, { useState, useEffect } from 'react';
import personajesData from './personajes.json'; // Asegúrate de que la ruta sea correcta
import './App.css'; // Importa los estilos
import imagenInicio from './img/Disney.png'; // Asegúrate de que la ruta de la imagen sea correcta

function App() {
  const [showApp, setShowApp] = useState(false);
  const [personajes, setPersonajes] = useState([]);
  const [filtroLetra, setFiltroLetra] = useState('');

  useEffect(() => {
    const personajesConImagenes = personajesData.characters.map((personaje) => {
      try {
        // Carga dinámica de la imagen usando require
        const imagen = require(`${personaje.image}`);
        return { ...personaje, image: imagen };
      } catch (error) {
        console.error(`Error cargando la imagen para ${personaje.name}:`, error);
        return personaje; // Devuelve el personaje sin cambiar la imagen si hay un error
      }
    });

    setPersonajes(personajesConImagenes);
  }, []);

  const handleLetraClick = (letra) => {
    setFiltroLetra(letra);
  };

  const handleVolverInicio = () => {
    setShowApp(false); // Cambia el estado para volver a la página de inicio
  };

  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.startsWith(filtroLetra)
  );

  const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  if (!showApp) {
    return (
      <div className="inicio">
        <h1>Welcome to the Disney Characters App</h1>
        <img src={imagenInicio} alt="Imagen de Disney" className="imagen-inicio" />
        <button onClick={() => setShowApp(true)} className="boton-inicio">
          Enter the App
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>List of Disney characters</h1>
      <div className="abecedario-container">
        {abecedario.map((letra) => (
          <button key={letra} onClick={() => handleLetraClick(letra)} className="letra-boton">
            {letra}
          </button>
        ))}
      </div>

      {filtroLetra && (
        <ul>
          {personajesFiltrados.length > 0 ? (
            personajesFiltrados.map((personaje, index) => (
              <li key={index} className="personaje-item">
                <h2>{personaje.name}</h2>
                <p>{personaje.description}</p>
                <img
                  src={personaje.image}
                  alt={personaje.name}
                  className="personaje-imagen"
                />
              </li>
            ))
          ) : (
            <p>There are no characters that start with the letter {filtroLetra}</p>
          )}
        </ul>
      )}

      {/* Botón para volver a la página de inicio */}
      <button onClick={handleVolverInicio} className="boton-volver-inicio">
        Go to Home
      </button>
    </div>
  );
}

export default App;
