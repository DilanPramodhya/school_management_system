import { Teachers } from "../models/teacherSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";

export const addTeacher = async (req, res, next) => {
  console.log(req.body);
  const { name, email, subject } = req.body;

  try {
    if (!name || !email || !subject) {
      handleValidationError("Please fill full form", 400);
    }
    await Teachers.create({ name, email, subject });
    res.status(200).json({
      success: true,
      message: "A new Teacher added Successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await Teachers.find();
    res.status(200).json({
      success: true,
      teachers,
    });
  } catch (err) {
    next(err);
  }
};
