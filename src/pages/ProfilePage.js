import React, {useState} from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../actions/user-actions";
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
  useDisclosure,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import PostList from "../components/PostList";
import FollowModal from "../components/FollowModal";

const ProfilePage = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const { profileId } = useParams();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileUser = useSelector((state) =>
    state.allUsers.find((user) => user?._id === profileId)
  );
  const [modalList, setModalList] = useState([]);
  const [header, setHeader] = useState("");

  const openModal = (modalHeader, desiredList) => {
    setModalList(desiredList);
    setHeader(modalHeader)
    onOpen();
  }

  return (
    <DefaultLayout>
      <FollowModal
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        followers={modalList}
        header={header}
      />
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
                    name={currentUser?.username}
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
          {currentUser?._id !== profileUser?._id && (
            <div>
              {currentUser?.following?.indexOf(profileUser?._id) === -1 ? (
                <Button
                  onClick={() => {
                    updateUser(dispatch, {
                      ...currentUser,
                      following: [...currentUser.following, profileUser?._id],
                    });

                    updateUser(dispatch, {
                      ...profileUser,
                      followers: [...profileUser.followers, currentUser?._id],
                    });
                  }}
                >
                  Follow
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    updateUser(dispatch, {
                      ...currentUser,
                      following: currentUser.following.filter(
                        (id) => id !== profileUser?._id
                      ),
                    });
                    updateUser(dispatch, {
                      ...profileUser,
                      followers: profileUser.followers.filter(
                        (id) => id !== currentUser?._id
                      ),
                    });
                  }}
                >
                  Unfollow
                </Button>
              )}
            </div>
          )}
                {currentUser?.userType === "admin" && (
                    <Button onClick={() => navigate("/admin")}>Admin Page</Button>
                )}
              </Center>
            </WrapItem>
        </Wrap>
        <HStack>
          <Text onClick={(e) => {openModal("Followers", profileUser?.followers)}}>
            Followers: {profileUser?.followers.length}
          </Text>
          <Text onClick={(e) => {openModal("Following", profileUser?.following)}}>Following: {profileUser?.following.length}</Text>

        </HStack>
        <PostList />
      </Stack>
    </DefaultLayout>
  );
};
export default ProfilePage;