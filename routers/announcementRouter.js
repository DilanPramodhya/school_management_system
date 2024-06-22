import express from "express";
import {
  createAnnouncement,
  getAllAnnouncements,
} from "../controllers/announcementController.js";

const router = express.Router();

router.get("/getAll", getAllAnnouncements);
router.post("/create", createAnnouncement);

export default router;
