const mongoose = require("mongoose");

// Create the message schema
const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model (message sender)
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat", // Reference to the Chat model
      required: true,
    },
    mediaUrl: {
      type: String,
      default: "", // Optional media (image, video, etc.)
    },
    isRead: {
      type: Boolean,
      default: false, // Mark if the message is read
    },
  },
  {
    timestamps: true,
  }
);

// Export the Message model
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
