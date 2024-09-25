import { Router } from "express";
import userController from "../controllers/user.controller.js";

const route = Router();

route.get("/", userController);

export default route;
