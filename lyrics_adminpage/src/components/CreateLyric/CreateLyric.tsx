import { ChangeEvent, FormEvent, useState } from "react";
import { ILyric } from "../../models/ILyric";
import axios from "axios";

import "./CreateLyric.scss";

const CreateLyric = () => {
  const [inputError, setInputError] = useState(false);

  const [newLyric, setNewLyric] = useState<ILyric>({
    title: "",
    text: "",
    translationEn: "",
    translationTr: "",
    singer: "",
    songWriter: "",
    dialect: "",
    youtubeLink: "",
    spotifyLink: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const elementName = e.target.name;

    setNewLyric({ ...newLyric, [elementName]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      newLyric.title === "" ||
      newLyric.text === "" ||
      newLyric.translationEn === "" ||
      newLyric.translationTr === "" ||
      newLyric.singer === "" ||
      newLyric.songWriter === "" ||
      newLyric.dialect === "" ||
      newLyric.youtubeLink === "" ||
      newLyric.spotifyLink === ""
    ) {
      setInputError(true);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/lyrics",
        newLyric
      );

      console.log(response);

      setNewLyric({
        title: "",
        text: "",
        translationEn: "",
        translationTr: "",
        singer: "",
        songWriter: "",
        dialect: "",
        youtubeLink: "",
        spotifyLink: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>STRANEKÊ LÊ ZÊDE BIKE:</h2>
      <form className="lyricForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="title"
          placeholder="navê stranê"
          value={newLyric.title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          className="text"
          placeholder="gotinên stranê"
          value={newLyric.text}
          name="text"
          onChange={handleChange}
        />
        <input
          type="text"
          className="translationEn"
          placeholder="wergera inglizî"
          value={newLyric.translationEn}
          name="translationEn"
          onChange={handleChange}
        />
        <input
          type="text"
          className="translationTr"
          placeholder="wergera tirkî"
          value={newLyric.translationTr}
          name="translationTr"
          onChange={handleChange}
        />
        <input
          type="text"
          className="singer"
          placeholder="stranbêj"
          value={newLyric.singer}
          name="singer"
          onChange={handleChange}
        />
        <input
          type="text"
          className="songWriter"
          placeholder="nivîskarê stranê"
          value={newLyric.songWriter}
          name="songWriter"
          onChange={handleChange}
        />
        <input
          type="text"
          className="dialect"
          placeholder="zarava"
          value={newLyric.dialect}
          name="dialect"
          onChange={handleChange}
        />
        <input
          type="text"
          className="youtubeLink"
          placeholder="lînkê youtubeê"
          value={newLyric.youtubeLink}
          name="youtubeLink"
          onChange={handleChange}
        />
        <input
          type="text"
          className="spotifyLink"
          placeholder="lînkê spotifyê"
          value={newLyric.spotifyLink}
          name="spotifyLink"
          onChange={handleChange}
        />{" "}
        {inputError && (
          <div>
            <p>Divê hemû rêz werin dagirtin!</p>
            <p>Divê hemû rêz werin dagirtin!</p>
          </div>
        )}
        <button type="submit">bişîne</button>
      </form>
    </div>
  );
};

export default CreateLyric;
