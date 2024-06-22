import express from "express";
import { addExam, getAllExams } from "../controllers/examController.js";

const router = express.Router();

router.get("/getAll", getAllExams);
router.post("/create", addExam);

export default router;
