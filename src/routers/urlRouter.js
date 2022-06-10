import {Router} from "express";
import { createUrlShorten } from "../controllers/urlsController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { tokenValidate } from "../middlewares/tokenValidation.js";

const urlController = Router();
urlController.post("/urls/shorten", tokenValidate, validateSchema, createUrlShorten);

export default urlController;