import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import {
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ProfilePage = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const { profileId } = useParams();
  const profileUser = useSelector((state) =>
    state.allUsers.find((user) => user?._id === profileId)
  );

  return (
  <>
    <DefaultLayout />
      <Stack
        align={"center"}
        justify={"center"}
        spacing={4}
        w={"80%"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <HStack>
          <Heading>@{profileUser?.username}</Heading>
          {profileUser?.verified && <CheckCircleIcon />}
          <Text>Followers: {profileUser?.stats.followers.length}</Text>
          <Text>Following: {profileUser?.stats.following.length}</Text>
          {currentUser?._id === profileUser?._id && (
            <Button onClick={() => navigate("/edit-profile")}>
              Edit Profile
            </Button>
          )}
        </HStack>
      </Stack>
    </>
  );
};
export default ProfilePage;
