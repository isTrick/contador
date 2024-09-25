import { Router } from "express";
import userController from "../controllers/user.controller.js";

const route = Router();

route.post ("/", userController);

export default route;
