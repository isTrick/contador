import User from "../models/User.js";
import {
  createService,
  findAllService,
  findByIdService,
  updateService,
} from "../services/user.service.js";
import mongoose from "mongoose";

const create = async (req, res) => {
  try{

  
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  const user = await createService(req.body);

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

}catch(error){
  console.log('Error Database:' ,error)

  return res.status(400).send({
    message: 'Error connecting to the server. Please try again later.'
  })
}
};

const findAll = async (req, res) => {
  const users = await findAllService();

  if (users.length === 0) {
    return res.send
      .status(400)
      .send({ message: "There are no registered users" });
  }

  res.send(users);
};

const findById = async (req, res) => {
  const user = req.user;

  res.send(user);
};

const update = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at least one field for update" });
  }

  const { id, user } = req;

  await updateService(id, name, email, password, avatar, background);

  res.send({ message: "User successfully updated" });
};

export default { create, findAll, findById, update };
