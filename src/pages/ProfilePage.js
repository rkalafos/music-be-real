import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import {
  Avatar,
  Button,
  Center,
  Heading,
  HStack,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import PostList from "../components/PostList";

const ProfilePage = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const { profileId } = useParams();
  const profileUser = useSelector((state) =>
    state.allUsers.find((user) => user?._id === profileId)
  );

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
        <Wrap spacing='4px'>
            <WrapItem>
              <Center>
                <Avatar
                    size="md"
                    name={profileUser?.username}
                    src={profileUser?.avatarImage}
                ></Avatar>
                <Heading>
                  {profileUser?.firstName + " " + profileUser?.lastName}
                </Heading>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Heading color="black">(@{profileUser?.username})</Heading>
                {profileUser?.verified && <CheckCircleIcon />}
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                {currentUser?._id === profileUser?._id && (
                    <Button onClick={() => navigate("/edit-profile")}>
                      Edit Profile
                    </Button>
                )}
                {currentUser?.userType === "admin" && (
                    <Button onClick={() => navigate("/admin")}>Admin Page</Button>
                )}
              </Center>
            </WrapItem>
        </Wrap>
        <HStack>
          <Text>Followers: {profileUser?.followers.length}</Text>
          <Text>Following: {profileUser?.following.length}</Text>
        </HStack>
        <PostList />
      </Stack>
    </DefaultLayout>
  );
};
export default ProfilePage;
