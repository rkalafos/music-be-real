import axios from 'axios';
import {SEARCH_API} from "../utils/constants";

export const searchSongs = async (query, token) => {
    const response = await axios.get(
        SEARCH_API + query,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: query,
                type: "track"
            }
        }
    );
    return response.data.tracks.items;
}