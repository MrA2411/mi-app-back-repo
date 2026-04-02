import dotenv from 'dotenv';
import express from 'express';

//config
dotenv.config();

//variables globales
const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(express.json());

//endpoints
app.get('/', (req, res) => {
  res.send('Hola Andres, soy tu nuevo servidor 🚀');
});

//listener
app.listen(PORT, () => {
  console.log(
    `Andres, estoy escuchando tus peticiones en el puerto ${PORT} 😎`,
  );
});
