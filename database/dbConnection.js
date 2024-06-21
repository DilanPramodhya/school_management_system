import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "SCHOOL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.log("Error occurred while Connecting to the database");
    });
};
