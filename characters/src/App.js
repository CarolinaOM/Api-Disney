import React, { useState, useEffect } from 'react';
import personajesData from './personajes.json'; // Importa el JSON de personajes
import './App.css'; // Importa los estilos
import imagenInicio from './img/Disney.png'; // Importa la imagen local

function App() {
  const [showApp, setShowApp] = useState(false); // Estado para alternar entre la pantalla inicial y la app
  const [personajes, setPersonajes] = useState([]);
  const [filtroLetra, setFiltroLetra] = useState(''); // Estado para almacenar la letra seleccionada

  // Cargar todos los personajes al inicio
  useEffect(() => {
    setPersonajes(personajesData.characters);
  }, []);

  // Manejar la selección de una letra
  const handleLetraClick = (letra) => {
    setFiltroLetra(letra); // Actualiza la letra filtrada
  };

  // Filtrar los personajes según la letra seleccionada
  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.startsWith(filtroLetra)
  );

  // Generar los botones del abecedario
  const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Mostrar la pantalla de inicio
  if (!showApp) {
    return (
      <div className="inicio">
        <h1>Welcome to the Disney Characters App</h1>
        <img 
          src={imagenInicio} 
          alt="Imagen de Disney" 
          className="imagen-inicio"
        />
        <button onClick={() => setShowApp(true)} className="boton-inicio">
          Enter the App
        </button>
      </div>
    );
  }

  // Mostrar la aplicación si el usuario ha hecho clic en el botón
  return (
    <div className="App">
      <h1>List of Disney characters</h1>

      {/* Botones de las letras del abecedario */}
      <div className="abecedario-container">
        {abecedario.map((letra) => (
          <button key={letra} onClick={() => handleLetraClick(letra)} className="letra-boton">
            {letra}
          </button>
        ))}
      </div>

      {/* Mostrar los personajes filtrados solo si hay una letra seleccionada */}
      {filtroLetra && (
        <ul>
          {personajesFiltrados.length > 0 ? (
            personajesFiltrados.map((personaje, index) => (
              <li key={index}>
                <h2>{personaje.name}</h2> {/* Mostrar solo el nombre */}
              </li>
            ))
          ) : (
            <p>There are no characters that start with the letter {filtroLetra}</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;