import * as service from "../services/song-choice-services";
import {GET_SONG_BY_ID, SEARCH_SONGS} from "../utils/constants";

export const searchSongs = async (dispatch, query, token) => {
  const songChoices = await service.searchSongs(query, token);
  dispatch({
    type: SEARCH_SONGS,
    songChoices,
  });
};

export const getSongById = async (dispatch, id) => {
  const songChoices = await service.getSongById(id);
  dispatch({
    type: GET_SONG_BY_ID,
    songChoices,
  });
};

