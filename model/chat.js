const mongoose = require("mongoose");

// Create the chat schema
const chatSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
      default: "Chat", // Default name for 1-on-1 chats
    },
    isGroupChat: {
      type: Boolean,
      default: false, // False means it's a 1-on-1 chat
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message", // Reference to the latest message in the chat
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Group admin (only for group chats)
      required: function () {
        return this.isGroupChat;
      },
    },
  },
  {
    timestamps: true,
  }
);

// Export the Chat model
const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
