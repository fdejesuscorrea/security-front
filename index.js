// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Ruta para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'Security')));

// Ruta para manejar la solicitud del archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Security/Auth', 'login.htm'));
});
app.get('/Security/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'Security/Auth', 'register.htm'));
  });

  app.get('/Security/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Security/Auth', 'login.htm'));
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
