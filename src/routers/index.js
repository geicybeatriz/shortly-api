import { Router } from "express";
import authController from "./authRouter.js";
import urlController from "./urlRouter.js";

const router = Router();
router.use(authController);
router.use(urlController);

export default router;