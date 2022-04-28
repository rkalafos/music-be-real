import * as service from "../services/song-choice-services";
import { SEARCH_SONGS } from "../utils/constants";

export const searchSongs = async (dispatch, query) => {
  const songChoices = await service.searchSongs(query);
  dispatch({
    type: SEARCH_SONGS,
    songChoices,
  });
};
