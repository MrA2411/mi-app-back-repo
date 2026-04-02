import { Router } from 'express';
import { NewUser } from '../controllers/UsuarioController.js';
import { AllUsers } from '../controllers/UsuarioController.js';
import { UpdateUser } from '../controllers/UsuarioController.js';

//config
const route = Router();

//endpoints route
route.post('/new-user', NewUser);
route.get('/all-users', AllUsers);
route.put('/update-user/:id', UpdateUser);

export default route;
