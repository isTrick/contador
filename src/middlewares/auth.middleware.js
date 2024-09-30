import jwt from "jsonwebtoken";
import { findByIdService } from "../services/user.service.js";
import { configDotenv } from "dotenv";
configDotenv();

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const parts = authorization.split(" ");

    const [schema, token] = parts;

    if (!authorization || schema !== "Bearer" || !token || parts.length !== 2) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Token invalid!" });
      }

      const user = await findByIdService(decoded.id);

      if (!user || !user.id) {
        return res.status(401).send({ message: "User not found" });
      }

      req.userId = user.id;

      return next();
    });
  } catch (err) {
    console.log("Error Database: ", err);
    return res.status(500).send({ message: err.message });
  }
};
