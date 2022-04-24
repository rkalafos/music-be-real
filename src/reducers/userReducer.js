import {
  CREATE_USER,
  DELETE_USER,
  FIND_ALL_USERS,
  FIND_USER_BY_ID,
  UPDATE_USER,
  LOGIN_USER,
} from "../actions/user-actions";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    // find user by id, find all users following another user ?
    case FIND_ALL_USERS:
      return action.users;
    case FIND_USER_BY_ID:
      return state.filter((user) => user._id === action.user._id);
    case DELETE_USER:
      return state.filter((user) => user._id !== action.user._id);
    case CREATE_USER:
      return [...state, action.newUser];
    case UPDATE_USER:
      return state.map((user) =>
        user._id === action.user._id ? action.user : user
      );
    case LOGIN_USER:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};
export default userReducer;
