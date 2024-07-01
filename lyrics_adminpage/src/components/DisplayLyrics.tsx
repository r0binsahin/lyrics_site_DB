import axios from 'axios';

const DisplayLyrics = () => {
  const getLyricsToDisplay = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/lyrics');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching lyrics:', error);
    }
  };

  getLyricsToDisplay();

  return <div>DisplayLyrics</div>;
};

export default DisplayLyrics;
