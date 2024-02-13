const Lyric = require("../models/Lyric");

exports.CreateLyric = async (req, res) => {
  const { title, text, singer, songWriter, dialect, youtubeLink, spotifyLink } =
    req.body;

  try {
    const newLyric = await Lyric.create({
      title: title,
      text: text,
      singer: singer,
      songWriter: songWriter,
      dialect: dialect,
      youtubeLink: youtubeLink,
      spotifyLink: spotifyLink,
    });

    return res.json({
      message: `New lyric added: ${newLyric.title} by ${newLyric.singer}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
