const bcrypt = require("bcryptjs");
// const httpStatus = require("http-status");
const {User} = require("../models/user.model");

const signing = async (data) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(data.password, salt);
  const user = await User.create({...data, password: hashedPassword});
  return user;
}

const logging = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Incorrect password");
  }

  return user;
}

module.exports = { signing, logging };