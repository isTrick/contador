import bcrypt from "bcrypt";
import { loginService } from "../services/auth.service.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginService(email);

    const passwordIsValid = bcrypt.compare(password, user.password);

    console.log(passwordIsValid);

    res.send({ user });
  } catch (err) {
    console.log("Error Database: ", err);
    return res.status(500).send({ message: err.message });
  }
};

export { login };
