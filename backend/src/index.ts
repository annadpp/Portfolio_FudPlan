import * as dotenv from "dotenv";

dotenv.config();

import express, { Request, Response, Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { connect } from "mongoose";
import { authRouter, recipeRouter } from "./route";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/auth", authRouter);
app.use("/recipe", recipeRouter);

const runDB = async () => {
  connect(process.env.MONGODB_URI as string)
    .then(() => console.log("DB connected successfully"))
    .catch(() => console.log("DB not connected"));
};

//start DB
runDB();

//Health check
app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.all("*", async (req: Request, res: Response) => {
  console.log(req.protocol);
  res.status(404).json({
    error: "The route you requested is not found",
  });
});

const PORT = (process.env.PORT as unknown as number) || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
