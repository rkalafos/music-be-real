import {
  CREATE_USER,
  DELETE_USER,
  FIND_ALL_USERS,
  FIND_USER_BY_ID,
  UPDATE_USER
} from "../actions/user-actions";

const userReducer = (state = {}, action) => {
  // state is retrieved from the store with the "user" keyword
  // state will look like...
  // {
  //      currentUser: Object,
  //      allUsers: Array[Object]
  //  }
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
    default:
      return state;
  }
};
export default userReducer;
