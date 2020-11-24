import { Router } from 'express'
import UserController from '../controllers/UserController';

const UserRoutes = Router();

UserRoutes.get("/",UserController.index);
UserRoutes.post("/create", UserController.create);
UserRoutes.get("/getUser",UserController.getUser);


export default UserRoutes;
