import {Router} from "express";
import { createUrlShorten, getUrlById } from "../controllers/urlsController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { tokenValidate } from "../middlewares/tokenValidation.js";
import urlSchema from "../schemas/urlSchema.js";

const urlController = Router();
urlController.post("/urls/shorten", tokenValidate, validateSchema(urlSchema), createUrlShorten);
urlController.get("/urls/:id", getUrlById);

export default urlController;