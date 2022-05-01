import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Box, Text } from "@chakra-ui/react";
import PostList from "../components/PostList";
import { useSelector } from "react-redux";
import PostListAnon from "../components/PostList/PostListAnon";

const HomePage = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <DefaultLayout>
      <Box bg={"white"} w={"80%"} align={"center"}>
        {currentUser?.username ? (
          <PostList />
        ) : (
            <>
              <Text p={6}>Join MusicBeReal to enjoy all the perks!</Text>
              <PostListAnon />
            </>
        )}
      </Box>
    </DefaultLayout>
  );
};

export default HomePage;
