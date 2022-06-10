import { Router } from "express";
import authController from "./authRouter.js";
import urlController from "./urlRouter.js";
import userController from "./userRouter.js";
import rankingController from "./rankingRouter.js";

const router = Router();
router.use(authController);
router.use(urlController);
router.use(userController);
router.use(rankingController);

export default router;