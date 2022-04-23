import axios from "axios";
import { SEARCH_API } from "../utils/constants";

export const searchSongs = async (query, token) => {

  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: {q: query},
    headers: {
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      'X-RapidAPI-Key': '9e7ec89eeamsh369e290f825803dp11db61jsn9fc863111477'
    }
  };
  const response = await axios.request(options);
  return response.data.data;
};
