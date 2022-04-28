import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Heading, HStack, Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import PostList from "../components/PostList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const navigate = useNavigate();
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


//
//      {/*
//            !token ?
//                <a href={`${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}>
//                    <h1 style={{color:'white'}}> Login to Spotify </h1>
//                </a> : <div>Logged in!</div>
//                */}

// export default HomePage;
