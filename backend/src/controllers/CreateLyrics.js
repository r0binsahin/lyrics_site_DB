const Lyric = require("../models/Lyric");

exports.CreateLyric = async (req, res) => {
  const {
    title,
    text,
    translationEn,
    translationTr,
    singer,
    songWriter,
    dialect,
    youtubeLink,
    spotifyLink,
  } = req.body;

  try {
    const existingLyric = await Lyric.findOne({ title: title });

    if (existingLyric) {
      return res
        .status(400)
        .json({ error: "Lyric with this title already exists" });
    }

    const newLyric = await Lyric.create({
      title: title,
      text: text,
      translationEn: translationEn,
      translationTr: translationTr,
      singer: singer,
      songWriter: songWriter,
      dialect: dialect,
      youtubeLink: youtubeLink,
      spotifyLink: spotifyLink,
    });

    return res.json({
      newLyric,
      message: `New lyric added: ${newLyric.title} by ${newLyric.singer}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
