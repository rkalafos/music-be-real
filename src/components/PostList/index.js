import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllPosts } from "../../actions/post-actions";
import { Stack, Text } from "@chakra-ui/react";
import Post from "./Post";

function filterPosts(posts, user) {
  const currentRoute = window.location.pathname.split("/");
  // If there are no posts, return an empty array
  if (Object.keys(posts).length === 0) {
    return [];
  } // If the user is not logged in, return the 5 latest posts
  else if (currentRoute[1] === "" && Object.keys(user).length === 0) {
    const sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    return sortedPosts.slice(0, 5);
  }
  // Otherwise, filter the posts based on the user
  else {
    const sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    return sortedPosts?.filter((post) => {
      if (currentRoute[1] === "profile") {
        return post.userId === currentRoute[2];
      } else if (currentRoute[1] === "details") {
        return post.track_id.toString() === currentRoute[2];
      } else {
        return !!(
          user.userType === "admin" ||
          user.following.includes(post.userId) ||
          post.userId === user._id
        );
      }
    });
  }
}

const PostList = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const posts = useSelector((state) => state.posts);
  const filteredPosts = filterPosts(posts, currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    findAllPosts(dispatch);
  }, [dispatch, posts]);

  return (
    <Stack spacing={4} w={"full"} p={6}>
      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <Text>No available posts.</Text>
        )}
      </div>
    </Stack>
  );
};
export default PostList;
