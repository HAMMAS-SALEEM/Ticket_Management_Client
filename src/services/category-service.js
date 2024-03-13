import axios from "axios";
import { BASE_URL } from "../config/app.config";

const API_URL = `${BASE_URL}/`

const getCategories = async () => {
  try {
    const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;
    const res = await axios.get(API_URL + 'categories', {
      headers: {
        'x-access-token': accessToken,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export default getCategories;