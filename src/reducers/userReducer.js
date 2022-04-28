export const SET_ALL_USERS = "SET_ALL_USERS";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const UPDATE_USER = "UPDATE_USER";

const userReducer = (state = [], action) => {
  // state is going to be a list of all users
  switch (action.type) {
    case SET_ALL_USERS:
      return action.allUsers;
    case ADD_USER:
      return [...state, action.newUser]
    case REMOVE_USER:
      return state.filter(value => value._id !== action.userId)
    case UPDATE_USER:
      return [...state.filter(value => value._id !== action.newUser._id), action.newUser]
    default:
      return state;
  }
};
export default userReducer;
