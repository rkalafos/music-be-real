import * as service from "../services/song-choice-services";
import { GET_SONG_BY_ID, SEARCH_SONGS } from "../utils/constants";

export const searchSongs = async (dispatch, query) => {
  const songChoices = await service.searchSongs(query);
  dispatch({
    type: SEARCH_SONGS,
    songChoices,
  });
};

export const getSongById = async (dispatch, id) => {
  const song = await service.getSongById(id);
  dispatch({
    type: GET_SONG_BY_ID,
    song,
  });
};
