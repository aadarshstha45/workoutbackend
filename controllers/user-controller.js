const Users = require("../models/user");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const createToken = (_id) => {
  return jwt.sign(
    {
      _id,
    },
    JWT_SECRET,
    {
      expiresIn: "3d",
    }
  );
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.login(email, password);

    //creating a token

    const token = createToken(user._id);

    console.log(user);
    res.status(201).json({
      message: "User LoggedIn Successfully",
      email,
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

//signup user
const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.signup(email, password);

    //creating a token

    const token = createToken(user._id);

    console.log(user);
    res.status(201).json({
      message: "User Registered Successfully",
      users: user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
