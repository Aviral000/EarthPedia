const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");
const config = require("./config/config");

mongoose.connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.listen(config.port, () => {
    console.log("Server listening on port");
});