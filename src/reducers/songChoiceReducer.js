import { GET_SONG_BY_ID, SEARCH_SONGS } from "../utils/constants";

const songChoiceReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SONG_BY_ID:
      return state;
    case SEARCH_SONGS:
      return { ...state, songChoices: action.songChoices };
    default:
      return state;
  }
};
export default songChoiceReducer;
