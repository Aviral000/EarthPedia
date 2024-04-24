const Router = require('express').Router();
const { signup, login } = require("../controllers/user.controllers");

Router.post("/signup", signup);
Router.post("/login", login);

module.exports = Router;