import axios from 'axios';

export const getLyricsToDisplay = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/lyrics');

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching lyrics:', error);
  }
};
