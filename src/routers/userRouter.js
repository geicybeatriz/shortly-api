import { Router } from "express";
import { getUsers } from "../controllers/userController.js";
import { tokenValidate } from "../middlewares/tokenValidation.js";

const userController = Router();
userController.get("/users/:id", tokenValidate, getUsers);

export default userController;