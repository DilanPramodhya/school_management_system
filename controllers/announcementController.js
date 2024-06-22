import { Announcement } from "../models/announcementSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";

// Create events
export const createAnnouncement = async (req, res, next) => {
  console.log(req.body);
  const { announcement } = req.body;

  try {
    if (!announcement) {
      handleValidationError("Please fill full form", 400);
    }
    await Announcement.create({ announcement });
    res.status(200).json({
      success: true,
      message: "Announcement created successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Get all events
export const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json({
      success: true,
      announcements,
    });
  } catch (err) {
    next(err);
  }
};
