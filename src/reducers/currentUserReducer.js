import {LOGIN, LOGOUT} from "../actions/current-user-actions";


const currentUserReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.user,
            };
        case LOGOUT:
            return {}
        default:
            return state;
    }
};
export default currentUserReducer;
