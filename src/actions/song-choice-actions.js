import * as service from "../services/song-choice-services";
import { SEARCH_SONGS } from "../utils/constants";

export const searchSongs = async (dispatch, query, token) => {
  const songChoices = await service.searchSongs(query, token);
  dispatch({
    type: SEARCH_SONGS,
    songChoices,
  });
};
