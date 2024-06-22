import express from "express";
import {
  getAllAttendance,
  markAttendance,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/getAll", getAllAttendance);
router.post("/mark", markAttendance);

export default router;
