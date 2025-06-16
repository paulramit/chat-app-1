const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "360d",
  });
};

module.exports = generateToken;
