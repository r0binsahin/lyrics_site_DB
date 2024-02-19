import { ChangeEvent, FormEvent, useState } from "react";
import { ILyric } from "../../models/ILyric";
import axios from "axios";

import "./CreateLyric.scss";

type FieldErrors = Partial<Record<keyof ILyric, boolean>>;

interface ICreateLyricProps {
  lyric: ILyric;
}

const CreateLyric = () => {
  const [inputError, setInputError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [lastCreatedLyric, setLastCreatedLyric] = useState<ILyric | null>(null);
  const errors: FieldErrors = {};
  let hasError = false;

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

    if (Object.values(newLyric).some((value) => value === "")) {
      setInputError(true);
    }

    for (const key in newLyric) {
      if (newLyric[key as keyof ILyric].trim() === "") {
        errors[key as keyof ILyric] = true;
        hasError = true;
      }
    }

    setFieldErrors(errors);

    if (hasError) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/lyrics",
        newLyric
      );

      setLastCreatedLyric(response.data.newLyric);
      console.log(response.data);

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
    <>
      {lastCreatedLyric ? (
        <div>
          <p>Stran lê hat zêde kirin</p>
          <p>{lastCreatedLyric?.title}</p>
          <p>{lastCreatedLyric?.text}</p>
        </div>
      ) : (
        <div className="container">
          <h2>STRANEKÊ LÊ ZÊDE BIKE:</h2>
          <form className="lyricForm" onSubmit={handleSubmit}>
            <input
              type="text"
              className={`title ${fieldErrors.title ? "error" : ""}`}
              placeholder="navê stranê"
              value={newLyric.title}
              name="title"
              onChange={handleChange}
            />
            <input
              type="text"
              className={`text ${fieldErrors.text ? "error" : ""}`}
              placeholder="gotinên stranê"
              value={newLyric.text}
              name="text"
              onChange={handleChange}
            />
            <input
              type="text"
              className={`translationEn ${
                fieldErrors.translationEn ? "error" : ""
              }`}
              placeholder="wergera inglizî"
              value={newLyric.translationEn}
              name="translationEn"
              onChange={handleChange}
            />
            <input
              type="text"
              className={`translationTr ${
                fieldErrors.translationTr ? "error" : ""
              }`}
              placeholder="wergera tirkî"
              value={newLyric.translationTr}
              name="translationTr"
              onChange={handleChange}
            />
            <input
              type="text"
              className={`singer ${fieldErrors.singer ? "error" : ""}`}
              placeholder="stranbêj"
              value={newLyric.singer}
              name="singer"
              onChange={handleChange}
            />
            <input
              type="text"
              className={`songWriter ${fieldErrors.songWriter ? "error" : ""}`}
              placeholder="nivîskarê stranê"
              value={newLyric.songWriter}
              name="songWriter"
              onChange={handleChange}
            />
            <input
              type="text"
              className={`dialect ${fieldErrors.dialect ? "error" : ""}`}
              placeholder="zarava"
              value={newLyric.dialect}
              name="dialect"
              onChange={handleChange}
            />
            <input
              type="text"
              className={`youtubeLink ${
                fieldErrors.youtubeLink ? "error" : ""
              }`}
              placeholder="lînkê youtubeê"
              value={newLyric.youtubeLink}
              name="youtubeLink"
              onChange={handleChange}
            />
            <input
              type="text"
              className={`spotifyLink ${
                fieldErrors.spotifyLink ? "error" : ""
              }`}
              placeholder="lînkê spotifyê"
              value={newLyric.spotifyLink}
              name="spotifyLink"
              onChange={handleChange}
            />{" "}
            {inputError && (
              <div>
                <p>Divê hemû rêz werin dagirtin!</p>
                <p>All fields must be filled!</p>
              </div>
            )}
            <button type="submit">bişîne</button>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateLyric;
