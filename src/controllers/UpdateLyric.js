const Lyric = require("../models/Lyric");

exports.UpdateLyric = async (req, res) => {
  const lyricId = req.params.lyricId;

  const { title, text, singer, songWriter, dialect, youtubeLink, spotifyLink } =
    req.body;

  try {
    const lyricToUpdate = await Lyric.findById(lyricId);

    if (!lyricToUpdate) return res.sendStatus(404);

    if (title) lyricToUpdate.title = title;
    if (text) lyricToUpdate.text = text;
    if (singer) lyricToUpdate.singer = singer;
    if (songWriter) lyricToUpdate.songWriter = songWriter;
    if (dialect) lyricToUpdate.dialect = dialect;
    if (youtubeLink) lyricToUpdate.youtubeLink = youtubeLink;
    if (spotifyLink) lyricToUpdate.spotifyLink = spotifyLink;

    const response = await lyricToUpdate.save();

    return res.json(lyricToUpdate);
  } catch (error) {}
};
