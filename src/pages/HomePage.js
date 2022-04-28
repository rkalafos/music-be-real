import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Box, Button, Flex, GridItem, Spacer, Grid } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import PostList from "../components/PostList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <DefaultLayout>
      <Grid
        w={"100%"}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem>
          <Flex w={"100%"}>
            <Spacer />
            <Box>
              {currentUser?.username ? (
                <Button
                  onClick={() => navigate(`/profile/${currentUser._id}`)}
                  mr={4}
                >
                  View Profile
                </Button>
              ) : (
                <div>
                  <Button
                    mr={4}
                    colorScheme={"red"}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                  <Button
                    mr={4}
                    colorScheme={"teal"}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                </div>
              )}
            </Box>
          </Flex>
        </GridItem>
        <GridItem />
        <GridItem bg="white">
          {currentUser?.username ? (
            <PostList />
          ) : (
            <div>Join MusicBeReal to enjoy all the perks!</div>
          )}
        </GridItem>
        <GridItem />
      </Grid>

      {/*
            !token ?
                <a href={`${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}>
                    <h1 style={{color:'white'}}> Login to Spotify </h1>
                </a> : <div>Logged in!</div>
                */}
    </DefaultLayout>
  );
};

export default HomePage;
