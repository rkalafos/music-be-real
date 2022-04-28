import * as service from "../services/user-services";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginUser = async (dispatch, userSend) => {
    const userResponse = await service.loginUser(userSend);
    dispatch({
        type: LOGIN,
        user: userResponse,
    });
};

export const logoutUser = (dispatch) => {
    dispatch({
        type: LOGOUT
    })
}