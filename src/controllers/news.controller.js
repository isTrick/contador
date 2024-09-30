import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
  try {
    const { authorization } = req.headers;
    
    if(!authorization) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    const parts = authorization.split(" ");

    const [schema, token] = parts;

    if (schema !== "Bearer" || !token || parts.length !== 2) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({ message: "Submit all fields for creation" });
    }

    await createService({
      title,
      text,
      banner,
      user: req.userId,
    });

    res.sendStatus(201);
  } catch (err) {
    console.log("Error Database: ", err);
    res.status(500).send({ message: err.message });
  }
};
const findAll = async (req, res) => {
  try {
    const news = await findAllService();

    if (news.length === 0) {
      return res.status(400).send({ message: "There are no news" });
    }

    res.send(news);
  } catch (err) {
    console.log("Error Database: ", err);
    return res.status(500).send({ message: err.message });
  }
};

export { create, findAll };
