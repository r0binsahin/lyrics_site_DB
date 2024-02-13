const Lyric = require("../models/Lyric");

exports.GetLyricById = async (req, res) => {
  try {
    const lyricId = req.params.lyricId;

    const lyric = await Lyric.findById(lyricId);

    if (!lyric) throw new Error("That lyric does not exist");

    return res.json(lyric);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error getting lyric! Check the objectId" });
  }
};
