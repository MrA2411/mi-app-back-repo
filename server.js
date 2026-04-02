import dotenv from 'dotenv';
import express from 'express';
import ConectarDB from './MongooseConection.js';
import userRoute from './routes/UserRoute.js';

//config
dotenv.config();

//global variables
const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(express.json());

//endpoints
app.use('/api', userRoute);
app.get('/', (req, res) => {
  res.send('Hola Andres, soy tu nuevo servidor 🚀');
});

//listener
app.listen(PORT, () => {
  console.log(
    `Andres, estoy escuchando tus peticiones en el puerto ${PORT} 😎`,
  );
});

//DB conection
ConectarDB();
