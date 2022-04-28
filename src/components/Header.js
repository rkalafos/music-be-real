import { Box, Button, Heading, HStack, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <HStack
      backgroundColor="rgba(0,0,0,0.6)"
      width="100%"
      height={{ base: "10vh", md: "12vh" }}
      justifyContent="center"
    >
      <Heading
        ms={4}
        onClick={() => navigate("/")}
        color={"white"}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={1.2}
        opacity={"100%"}
      >
        MusicBeReal.
      </Heading>
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
    </HStack>
  );
};
