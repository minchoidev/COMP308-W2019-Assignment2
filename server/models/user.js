// MEAN Portfolio
// File Name: user.js
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
// User Model
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

// password property has been taken out because it will be encrypted by passport-local-mongoos
let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required"
    },
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email is required"
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required"
    },
    created: {
      type: Date,
      default: Date.now
    },
    update: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "users"
  }
);

// configure options for the UserSchema
let options = ({
    missingPasswordError: "Wrong / Missing Password"
});

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);
