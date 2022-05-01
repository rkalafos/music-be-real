import axios from "axios";

export const searchSongs = async (query) => {
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: query },
    headers: {
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "9e7ec89eeamsh369e290f825803dp11db61jsn9fc863111477",
    },
  };
  const response = await axios.request(options);
  return response.data.data;
};

export const getSongById = async (songId) => {
  const response = await axios.get(
    `https://deezerdevs-deezer.p.rapidapi.com/track/${songId}`,
    {
      headers: {
        "X-RapidAPI-Key": "9e7ec89eeamsh369e290f825803dp11db61jsn9fc863111477",
      },
    }
  );
  return response.data;
};
