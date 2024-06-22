import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Book = mongoose.model("Library", librarySchema);
