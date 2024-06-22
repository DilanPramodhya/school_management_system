import { Events } from "../models/eventsSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";

// Create events
export const createEvents = async (req, res, next) => {
  console.log(req.body);
  const { events } = req.body;

  try {
    if (!events) {
      handleValidationError("Please fill full form", 400);
    }
    await Events.create({ events });
    res.status(200).json({
      success: true,
      message: "Event created successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Get all events
export const getAllEvents = async (req, res, next) => {
  try {
    const event = await Events.find();
    res.status(200).json({
      success: true,
      event,
    });
  } catch (err) {
    next(err);
  }
};
