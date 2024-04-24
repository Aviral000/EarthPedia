const express = require("express");
const compression = require("compression");
const cors = require("cors");
// const httpStatus = require("http-status");
const userRouter = require("./routes/user.route");
// const { errorHandler } = require("./middlewares/error");
// const ApiError = require("./utils/ApiError");
// const { jwtStrategy } = require("./config/passport");
const helmet = require("helmet");
const passport = require("passport");

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(cors());
app.options("*", cors());

app.use("", userRouter);

module.exports = app;
