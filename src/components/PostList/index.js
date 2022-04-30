import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllPosts } from "../../actions/post-actions";
import { Stack, Text } from "@chakra-ui/react";
import Post from "./Post";

function filterPosts(posts, user) {
  const currentRoute = window.location.pathname.split("/");
  if (Object.keys(posts).length === 0) {
    return [];
  } else {
    return posts?.filter((post) => {
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
  console.log(filteredPosts);

  return (
    <Stack spacing={4} w={"full"} p={6} my={12}>
      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <Text>
            No available posts.
          </Text>
        )}
      </div>
    </Stack>
  );
};
export default PostList;
