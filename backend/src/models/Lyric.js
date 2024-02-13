const mongoose = require("mongoose");

const LyricSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    text: {
      type: String,
    },

    singer: {
      type: String,
    },

    songWriter: {
      type: String,
    },
    dialect: {
      type: String,
    },
    youtubeLink: {
      type: String,
    },
    spotifyLink: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lyric", LyricSchema);
