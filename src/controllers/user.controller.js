import userService from "../services/user.service.js";

const userCreate = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  const user = await userService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating User." });
  }

  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

const userFindAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.send
      .status(400)
      .send({ message: "There are no registeres users" });
  }

  res.send(users)
};

export { userCreate,  userFindAll };
