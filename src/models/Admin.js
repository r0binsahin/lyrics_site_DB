const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },

    password: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
