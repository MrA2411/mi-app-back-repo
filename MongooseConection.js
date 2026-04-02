import mongoose from 'mongoose';
import dotenv from 'dotenv';

//config
dotenv.config();

//global variables
const URL_DB = process.env.MONGO_DB_URL;

//proof conection
const ConectarDB = async () => {
  try {
    await mongoose.connect(URL_DB);
    console.log('✅ Conectado a la bbdd de manera correcta');
  } catch (error) {
    console.log('❌ Error al intentar conectar con la bbdd');
    console.log(error.message);
  }
};

export default ConectarDB;
