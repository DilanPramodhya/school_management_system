import express from "express";
import { createEvents, getAllEvents } from "../controllers/eventsController.js";

const router = express.Router();

router.get("/getAll", getAllEvents);
router.post("/create", createEvents);

export default router;
