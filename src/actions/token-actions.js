import {SET_TOKEN} from "../utils/constants";


export const setToken = (dispatch, token) => {
    dispatch({
        type: SET_TOKEN,
        token
    });
}