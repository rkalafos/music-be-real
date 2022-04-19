import {SEARCH_SONGS} from "../utils/constants";

const songChoiceReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_SONGS:
            return {...state, songChoices: action.songChoices}
        default:
            return state;
    }
};
export default songChoiceReducer;