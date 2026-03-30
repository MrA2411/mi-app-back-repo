const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hola Andres, bienvenido a tu nuevo servidor');
});

app.listen(port, () => {
  console.log(`Estoy escuchando en el puerto ${port}`);
});

console.log(process.env);
