import mongoose from "mongoose";
import dotenv from "dotenv";
import process from "process";
dotenv.config();

mongoose.set("runValidators", true);

async function connectDB() {
  const MONGO_URI = process.env.MONGO_URI;
  console.log("Connecting to DB...");
  await mongoose
    .connect(MONGO_URI)
    .then(() => {
      if (MONGO_URI.includes("localhost")) {
        console.info("Connected to Local DB");
      } else if (MONGO_URI.includes("")) {
        console.info("Connected to Cloud DB");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export default connectDB;
