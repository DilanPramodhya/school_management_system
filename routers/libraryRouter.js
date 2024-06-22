import express from "express";
import validator from "validator";
import { createBook, getAllBooks } from "../controllers/libraryController.js";

const router = express.Router();

router.get("/getAll", getAllBooks);
router.post("/create", createBook);

export default router;
