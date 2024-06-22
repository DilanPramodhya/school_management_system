import { Book } from "../models/librarySchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";

export const createBook = async (req, res, next) => {
  console.log(req.body);
  const { bookName, author } = req.body;

  try {
    if (!bookName || !author) {
      handleValidationError("Please fill full form", 400);
    }
    await Book.create({ bookName, author });
    res.status(200).json({
      success: true,
      message: "A New Book is created successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      books,
    });
  } catch (err) {
    next(err);
  }
};
