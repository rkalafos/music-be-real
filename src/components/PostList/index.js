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
  console.log(posts);
  const filteredPosts = filterPosts(posts, currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    findAllPosts(dispatch);
  }, [dispatch, posts]);

  return (
    <Stack spacing={4} w={"full"} p={6} my={12}>
      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <Text>
            No available posts. Follow users to see their posts or create your
            own!
          </Text>
        )}
      </div>
    </Stack>
  );
};
export default PostList;
