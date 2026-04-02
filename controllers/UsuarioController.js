import mongoose from 'mongoose';
import UserSchema from '../models/UsuarioSchema.js';

//return all users
export const AllUsers = async (req, res) => {
  try {
    const data = await UserSchema.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: '❌ Error al obtener los usuarios existentes en la bbdd',
      error: error.message,
    });
  }
};

//new user controller
export const NewUser = async (req, res) => {
  const {
    nombres,
    apellidos,
    cargo,
    area,
    antiguedad,
    activo,
    fechaInactividad,
  } = req.body;

  try {
    if (
      !nombres ||
      !apellidos ||
      !cargo ||
      !area ||
      !antiguedad ||
      activo === undefined
    )
      return res
        .status(400)
        .json({ message: '❌ Faltan por completar datos obligatorios' });

    if (!activo && !fechaInactividad) {
      return res.status(400).json({
        message: '❌ Se debe completar el campo de fecha de inactividad',
      });
    }
    const data = await UserSchema.create({
      nombres,
      apellidos,
      cargo,
      area,
      antiguedad,
      activo,
      fechaInactividad,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      message: '❌ Error al intentar crear el nuevo usuario',
      error: error.message,
    });
  }
};

export const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const data = await UserSchema.findByIdAndUpdate(id, updates, {
      returnDocument: 'after',
    });

    if (!data) {
      return res
        .status(404)
        .json({ message: '❌ Usuario no existe en la base de datos' });
    }
    res
      .status(201)
      .json({
        messsage: '✅ Usuario actualizado de manera satisfactrioa',
        data,
      });
  } catch (error) {
    res.status(500).json({
      message: '❌ Error al intentar actualizar usuario',
      error: error.message,
    });
  }
};
