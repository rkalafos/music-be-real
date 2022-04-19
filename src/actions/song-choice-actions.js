import * as service from '../services/song-choice-services';
import {SEARCH_SONGS} from "../utils/constants";


export const searchSongs = async (dispatch, query, token) => {
    const results = await service.searchSongs(query, token)
    dispatch({
        type: SEARCH_SONGS,
        results
    });
}