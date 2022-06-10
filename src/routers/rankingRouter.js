import { Router } from "express";
import { getRanking } from "../controllers/rankingController.js";

const rankingController = Router();
rankingController.get("/ranking", getRanking);

export default rankingController;