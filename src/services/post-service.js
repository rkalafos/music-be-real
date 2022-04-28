import axios from 'axios';
const API_BASE = 'http://localhost:8000/api';
const POSTS_API = `${API_BASE}/posts`;

export const createPost = async (post) => {
  const response = await axios.post(POSTS_API, post);
  return response.data;
};

export const findAllPosts = async () => {
  const response = await axios.get(POSTS_API);
  return response.data;
};

export const findPostByID = async (id) => {
  const response = await axios.get(`${POSTS_API}/${id}`);
  return response.data;
};

export const deletePost = async (post) => {
  const response = await axios.delete(`${POSTS_API}/${post._id}`);
  return response.data;
};

export const updatePost = async (post) => {
  const response = await axios.put(`${POSTS_API}/${post._id}`, post);
  return response.data;
};
