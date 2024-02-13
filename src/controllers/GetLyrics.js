const Lyric = require("../models/Lyric");

exports.GetLyrics = async (req, res) => {
  try {
    const lyrics = await Lyric.find();

    if (lyrics.length === 0) {
      return res.json({ message: "No lyric to display" });
    } else {
      return res.json(lyrics);
    }
  } catch (error) {
    console.log(error);
  }
};
