import { Router } from "express";
import { userCreate, userFindAll } from "../controllers/user.controller.js";

const route = Router();

route.post ("/", userCreate);
route.get("/", userFindAll);

export default route;
