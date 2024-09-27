import express from "express";
import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import connectDB from "./src/database/db.js";

import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log("Service is running on port " + port);
});
