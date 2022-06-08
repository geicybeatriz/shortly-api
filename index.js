import express, {json} from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

//rotas
import authController from "./src/routers/authRouter.js";

const app = express();
app.use(cors());
app.use(json());

app.use(authController);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(chalk.bold.green(`Server is up and running on port ${port}`)));