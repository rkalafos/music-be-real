import { LOGIN, LOGOUT } from "../utils/constants";

const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.user,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
export default currentUserReducer;
