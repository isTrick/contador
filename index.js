import express from "express";
import userRoute from "./src/routes/user.route.js";

import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const port = process.env.PORT;

app.use("/soma", userRoute);

app.listen(port, () => {
  console.log("Service is running on port " + port);
});
