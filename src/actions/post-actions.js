import * as service from "../services/post-service";
import {
  CREATE_POST,
  DELETE_POST,
  FIND_ALL_POSTS,
  FIND_POST_BY_ID,
  UPDATE_POST,
} from "../utils/constants";

export const createPost = async (dispatch, post) => {
  const newPost = await service.createPost(post);
  dispatch({
    type: CREATE_POST,
    newPost,
  });
};

export const findAllPosts = async (dispatch) => {
  const posts = await service.findAllPosts();
  dispatch({
    type: FIND_ALL_POSTS,
    posts,
  });
};

export const findPostById = async (dispatch, id) => {
  const post = await service.findPostByID(id);
  dispatch({
    type: FIND_POST_BY_ID,
    post,
  });
};

export const updatePost = async (dispatch, post) => {
  await service.updatePost(post);
  dispatch({
    type: UPDATE_POST,
    post,
  });
};
export const deletePost = async (dispatch, post) => {
  await service.deletePost(post);
  dispatch({
    type: DELETE_POST,
    post,
  });
};
