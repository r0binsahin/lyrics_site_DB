import { useEffect, useState } from 'react';
import { ILyric } from '../models/ILyric';
import axios from 'axios';

const DisplayLyrics = () => {
  const [lyrics, setLyrics] = useState<ILyric[]>([]);

  const fetchLyrics = async () => {
    const res = await axios.get('http://localhost:3000/api/lyrics');
    return res.data;
  };

  useEffect(() => {
    const fetchAndSetLyrics = async () => {
      const lyrArray: ILyric[] = await fetchLyrics();
      setLyrics(lyrArray);
    };

    fetchAndSetLyrics();
  }, []);

  console.log(lyrics);
  return (
    <>
      <h1>My lyrics</h1>

      {lyrics.map((lyric) => {
        return (
          <ul>
            <li>{lyric.title}</li>
          </ul>
        );
      })}
    </>
  );
};

export default DisplayLyrics;
