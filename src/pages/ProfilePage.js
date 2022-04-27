import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import { findUserByID } from "../actions/user-actions";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const currentUser = useSelector((state) => state.currentUser);
  const profileUser = findUserByID(dispatch, profileId);

  return (
    <DefaultLayout>
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
        <Heading>User: {currentUser.username}</Heading>
        <Heading>Profile ID: {profileId}</Heading>

        {currentUser._id === profileUser._id && (
          <Button onClick={() => navigate("/edit-profile")}>
            Edit Profile
          </Button>
        )}
      </Stack>
    </DefaultLayout>
  );
};
export default ProfilePage;
