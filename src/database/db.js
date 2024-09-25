import mongoose from "mongoose";

const connectDB = () => {
  console.log("Wait database connection");

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Atlas Connected!"))
    .catch((error) => console.log(error));
};

export default connectDB;
