import { Router } from 'express'
import UserController from '../temp_2/UserController';

const UserRoutes = Router();

UserRoutes.get("/",UserController.index);
UserRoutes.post("/create", UserController.create);
UserRoutes.get("/getUser",UserController.getUser);


export default UserRoutes;
