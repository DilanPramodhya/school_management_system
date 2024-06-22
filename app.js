import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import studentRouter from "./routers/studentRouter.js";
import eventsRouter from "./routers/eventsRouter.js";
import libraryRouter from "./routers/libraryRouter.js";
import announcementRouter from "./routers/announcementRouter.js";
import assignmentRouter from "./routers/assignmentRouter.js";
import attendanceRouter from "./routers/attendanceRouter.js";
import classRouter from "./routers/classRouter.js";
import examRouter from "./routers/examRouter.js";
import teacherRouter from "./routers/teacherRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/books", libraryRouter);
app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/assignments", assignmentRouter);
app.use("/api/v1/attendance", attendanceRouter);
app.use("/api/v1/class", classRouter);
app.use("/api/v1/exam", examRouter);
app.use("/api/v1/teachers", teacherRouter);

dbConnection();

export default app;
