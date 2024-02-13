const Lyric = require("../models/Lyric");

exports.DeleteLyric = async (req, res) => {
  try {
    const lyricId = req.params.lyricId;
    const lyricToDelete = await Lyric.findById(lyricId);

    if (!lyricToDelete) {
      return res.json({ message: "No lyric to deleted" });
    } else {
      await lyricToDelete.deleteOne();
      return res.sendStatus(204, res.json({ message: "Lyric deleted" }));
    }
  } catch (error) {
    console.log(error);
  }
};
