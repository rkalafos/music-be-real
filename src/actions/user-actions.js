import * as service from "../services/user-services";
import {
  ADD_USER,
  REMOVE_USER,
  SET_ALL_USERS,
  UPDATE_USER,
} from "../utils/constants";

export const getAllUsers = async (dispatch) => {
  const allUsers = await service.findAllUsers();
  dispatch({
    type: SET_ALL_USERS,
    allUsers,
  });
};

export const createUser = async (dispatch, user) => {
  const newUser = await service.createUser(user);
  dispatch({
    type: ADD_USER,
    newUser,
  });
};

export const updateUser = async (dispatch, user) => {
  const newUser = await service.updateUser(user);
  dispatch({
    type: UPDATE_USER,
    newUser,
  });
};

export const deleteUser = async (dispatch, user) => {
  const response = await service.deleteUser(user);
  dispatch({
    type: REMOVE_USER,
    user,
  });
};
