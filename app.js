import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import studentRouter from "./routers/studentRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
config({ path: "./config/config.env" });

app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/students", studentRouter);

dbConnection();

export default app;
