export const SEARCH_SONGS = "SEARCH_SONGS";
export const GET_SONG_BY_ID = "GET_SONG_BY_ID";
export const SET_TOKEN = "SET_TOKEN";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CREATE_POST = "CREATE_POST";
export const FIND_ALL_POSTS = "FIND_ALL_POSTS";
export const FIND_POST_BY_ID = "FIND_POST_BY_ID";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const SET_ALL_USERS = "SET_ALL_USERS";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const USERS_API = "http://localhost:8000/api/users";
export const API_BASE =
  process.env.REACT_APP_API_BASE || "http://localhost:8000/api";
export const POSTS_API = `${API_BASE}/posts`;
