import { Router } from "express";
import authController from "./authRouter.js";
import urlController from "./urlRouter.js";
import userController from "./userRouter.js";

const router = Router();
router.use(authController);
router.use(urlController);
router.use(userController);

export default router;