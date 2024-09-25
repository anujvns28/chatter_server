const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Create the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "Hey there! I am using this chat app!",
    },
    online: {
      type: Boolean,
      default: false,
    },
    chats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat", // Reference to the Chat model
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Export the User model
const User = mongoose.model("User", userSchema);
module.exports = User;
