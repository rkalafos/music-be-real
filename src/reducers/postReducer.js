import {
    CREATE_POST,
    DELETE_POST,
    FIND_ALL_POSTS,
    FIND_POST_BY_ID,
    UPDATE_POST
} from "../actions/post-actions";

const postReducer = (state = {}, action) => {
    switch (action.type) {
        case FIND_ALL_POSTS:
            return action.posts;
        case FIND_POST_BY_ID:
            return state.filter((post) => post._id === action.post._id);
        case DELETE_POST:
            return state.filter(
                post => post._id !== action.post._id);
        case CREATE_POST:
            return [
                ...state,
                action.newPost
            ];
        case UPDATE_POST:
            return state.map(
                post => post._id === action.post._id ?
                    action.post : post);
        default:
            return state;
    }
};
export default postReducer;
