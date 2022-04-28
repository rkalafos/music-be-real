import {
  ADD_USER,
  REMOVE_USER,
  SET_ALL_USERS,
  UPDATE_USER,
} from "../utils/constants";

const userReducer = (state = [], action) => {
  // state is going to be a list of all users
  switch (action.type) {
    case SET_ALL_USERS:
      return action.allUsers;
    case ADD_USER:
      return [...state, action.newUser];
    case REMOVE_USER:
      return state.filter((value) => value._id !== action.userId);
    case UPDATE_USER:
      return [
        ...state.filter((value) => value._id !== action.newUser._id),
        action.newUser,
      ];
    default:
      return state;
  }
};
export default userReducer;
