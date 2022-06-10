import { signUp, signIn } from "../controllers/authController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import signUpSchema from "../schemas/signUpSchema.js";
import signInSchema from "../schemas/signInSchema.js";
import { Router } from "express";

const authController = Router();
authController.post("/signup", validateSchema(signUpSchema), signUp);
authController.post("/signin", validateSchema(signInSchema), signIn);

export default authController;