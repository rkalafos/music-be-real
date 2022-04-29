import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Grid, GridItem } from "@chakra-ui/react";
import PostList from "../components/PostList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
  <DefaultLayout>
  <Grid
    h='200px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(5, 1fr)'
    gap={4}
  >
    <GridItem colSpan={6} bg="white">
          {currentUser?.username ? (
            <PostList />
          ) : (
            <div>Join MusicBeReal to enjoy all the perks!</div>
          )}
    </GridItem>
  </Grid>
</ DefaultLayout>
  );
};

export default HomePage;
