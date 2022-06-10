import { Router } from "express";
import authController from "./authRouter.js";

const router = Router();
router.use(authController);

export default router;