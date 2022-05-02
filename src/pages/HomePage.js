import React, { useEffect } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../actions/user-actions";
import FollowComponent from "../components/FollowComponent";

const HomePage = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  // Runs when the component mounts, gets all of the users and sets them to the state
  useEffect(() => {
    getAllUsers(dispatch);
  }, [dispatch]);
  return (
    <DefaultLayout>
      <Stack
        direction={{ sm: "column", md: "column", lg: "row" }}
        spacing={10}
        mx={10}
      >
        <Box bg={"white"} align={"center"} rounded={"lg"}>
          {currentUser?.username ? (
            <Heading size={"xl"} p={6}>
              @{currentUser?.username}'s Feed
            </Heading>
          ) : (
            <Text mt={3}>
              Here are the latest posts. Create an account to see more content!
            </Text>
          )}
          <PostList />
        </Box>
        <Box bg={"white"} rounded={"lg"}>
          <FollowComponent />
        </Box>
      </Stack>
    </DefaultLayout>
  );
};

export default HomePage;
