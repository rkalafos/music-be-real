import axios from 'axios';
import {SEARCH_API} from "../utils/constants";

export const searchSongs = async (query, token) => {
    console.log(`Search song token: ${token}`)
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
    console.log(response);
    return response.data.tracks?.items;
}