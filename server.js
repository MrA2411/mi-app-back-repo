const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hola Andres, bienvenido a tu nuevo servidor');
});

app.listen(port, () => {
  console.log(`Estoy escuchando en el puerto ${port}`);
});
