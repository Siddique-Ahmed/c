import mongoose from "mongoose";

export const connectDatabase = async () => {
  let connection;
  connection = mongoose.connect(process.env.MONGODB_URI);
  if (connection) {
    console.log("DB Connected");
  } else {
    console.log("DB Not Connected");
  }
};
