import express from "express";
import { addTeacher, getAllTeachers } from "../controllers/teacherController.js";

const router = express.Router();

router.get("/getAll", getAllTeachers);
router.post("/create", addTeacher);

export default router;
