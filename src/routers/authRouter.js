import { signUpValidate, signInValidate } from "../middlewares/userValidation.js";
import { Router } from "express";

const authController = Router();
authController.post("/signup", signUpValidate);
authController.post("/signin", signInValidate);

export default authController;