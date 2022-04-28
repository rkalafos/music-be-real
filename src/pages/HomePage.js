import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import {
  Button,
  HStack,
  VStack,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import PostList from "../components/PostList";
import { useSelector } from "react-redux";

const HomePage = () => {
  // TODO: Make responsive
  // TODO: Change content based on logged in or not
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <DefaultLayout>
      <HStack w={"full"}>
        <VStack
          w={"35%"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          spacing={4}
          p={6}
          m={4}
        >
          <Heading>@{currentUser.username}</Heading>
          <Button>Edit Profile</Button>
          <Button>Create Post</Button>
        </VStack>
        <VStack
          w={"60%"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          spacing={4}
          p={6}
          m={4}
        >
          <PostList />
        </VStack>
      </HStack>
    </DefaultLayout>
  );
};

export default HomePage;
