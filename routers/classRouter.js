import express from "express";
import { createClass, getAllClasses } from "../controllers/classController.js";

const router = express.Router();

router.get("/getAll", getAllClasses);
router.post("/create", createClass);

export default router;
