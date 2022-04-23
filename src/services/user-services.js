import axios from "axios";

const USERS_API = "http://localhost:8000/api/users";

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

//Assuming we pass in just an id for a user
export const findUserByID = async (id) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(USERS_API, user);
  return response.data;
};

export const deleteUser = async (user) => {
  const response = await axios.delete(`${USERS_API}/${user._id}`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const loginUser = async (user) => {
  const response = await axios.post(`${USERS_API}login`, user);
  console.log(response.data)
  return response.data;
};
