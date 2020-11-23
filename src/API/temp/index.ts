import {Router} from 'express'
import UserRoutes from './UserRoutes';

const routes = Router();

routes.use('/user', UserRoutes);


export default routes;
