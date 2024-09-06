import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URI as string
    );
    if (connection.readyState === 1) {
      console.log("Connected to db");

      return Promise.resolve(true);
    }
  } catch (err) {
    console.log(err, "Error has been occuried while connecting to db");
    return Promise.reject(err);
  }
};
