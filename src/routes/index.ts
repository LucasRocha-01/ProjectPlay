import { Router } from 'express';
import usersRouter from './usuarios.routes';

const routes = Router();

routes.use('/users', usersRouter);

export default routes;
