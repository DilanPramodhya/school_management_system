import mongoose from "mongoose";
import validator from "validator";

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  className: {
    type: String,
    required: true,
  },
  marks: {
    type: String,
    required: true,
  },
});

export const Exam = mongoose.model("Exam", examSchema);
