const mongoose = require("mongoose");
const validator = require("validator");
const config = require("../config/config");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Invalid Email Address",
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error(
            "Password must contain at least one letter and one number"
          );
        }
      },
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.statics.isEmailTaken = async function (email) {
  const user = await this.findOne({email:email});
  return !!user;
};

userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return await bcrypt.compare(password, user.password)
}

userSchema.methods.hasSetNonDefaultAddress = async function () {
  const user = this;
  return user.address !== config.default_address;
};


const User = mongoose.model("User",userSchema);

module.exports = {User};
