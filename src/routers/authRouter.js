import { signUpValidate, signInValidate } from "../middlewares/userValidation.js";
import { addUser, signIn } from "../controllers/userController.js";
import { Router } from "express";

const authController = Router();
authController.post("/signup", signUpValidate, addUser);
authController.post("/signin", signInValidate, signIn);

export default authController;