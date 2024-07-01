import axios from 'axios';
import { IUser } from '../models/IUser';

export const login = async (email: string, password: string) => {
  const user: IUser = { email: email, password: password };

  try {
    const response = await axios.post('http://localhost:3000/login', user);

    if (response.data.token) {
      localStorage.setItem('userToken', JSON.stringify(response.data.token));
    }

    return response.data.message;
  } catch (error) {
    console.log(error);
  }
};
