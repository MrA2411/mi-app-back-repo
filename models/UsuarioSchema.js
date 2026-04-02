import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    nombres: {
      type: String,
      required: true,
      match: [/^[A-Za-z\s]+$/, 'El nombre solo puede contener letras'],
    },
    apellidos: {
      type: String,
      required: true,
      match: [/^[A-Za-z\s]+$/, 'El apellido solo puede contener letras'],
    },
    cargo: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    antiguedad: {
      type: String,
      required: true,
    },
    activo: {
      type: Boolean,
      default: true,
    },
    fechaInactividad: {
      type: Date,
      validate: {
        validator: function (v) {
          if (!this.activo) {
            return v instanceof Date && !isNaN(v);
          }
          return true;
        },
        message: (props) => `${props.value} no es una fecha valida`,
      },
    },
  },
  { timestamps: true },
);

export default model('Usuario', UserSchema);
