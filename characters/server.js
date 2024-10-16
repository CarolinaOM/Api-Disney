const express = require('express');
const cors = require('cors');
const app = express();

// Habilitar CORS
app.use(cors());

// JSON de personajes de Disney (sin imágenes)
const personajes = {
  "characters": [
    { "name": "Mickey Mouse" },
    { "name": "Minnie Mouse" },
    { "name": "Donald Duck" },
    { "name": "Goofy" },
    { "name": "Pluto" },
    { "name": "Ariel" },
    { "name": "Simba" },
    { "name": "Elsa" },
    { "name": "Anna" },
    { "name": "Buzz Lightyear" },
    { "name": "Woody" },
    { "name": "Tiana" },
    { "name": "Belle" },
    { "name": "Peter Pan" },
    { "name": "Jasmine" },
    { "name": "Aladdin" }
  ]
};

// Endpoint para obtener personajes
app.get('/personajes', (req, res) => {
  res.json(personajes);
});

// Configurar el puerto
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
