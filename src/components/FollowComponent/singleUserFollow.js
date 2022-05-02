import { Avatar, Button, GridItem, Text, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/user-actions";
import { loginUser } from "../../actions/current-user-actions";

const followUser = (dispatch, firstUser, secondUser) => {
  firstUser.following.push(secondUser._id);
  secondUser.followers.push(firstUser._id);
  updateUser(dispatch, firstUser);
  updateUser(dispatch, secondUser);
  loginUser(firstUser);
};

const SingleUserFollow = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const isLoggedIn = !!currentUser?.username;
  const isFollowing = currentUser?.following?.includes(user._id);
  return (
    <SimpleGrid
      p={2}
      gap={2}
      templateColumns={`repeat(${isLoggedIn ? 4 : 3}, 1fr)`}
      bg={"white"}
      border={"2px"}
      borderColor={"gray.200"}
    >
      <GridItem>
        <Avatar src={user.avatarImage} name={user.username} />
      </GridItem>
      <GridItem>
        <Text>@{user.username}</Text>
      </GridItem>
      <GridItem>
        <Button onClick={() => navigate(`/profile/${user._id}`)}>
          View Profile
        </Button>
      </GridItem>
      {isLoggedIn && (
        <GridItem>
          {isFollowing ? (
            <Button bgColor={"gray.200"}>Following</Button>
          ) : (
            <Button
              bgColor={"teal.400"}
              color={"white"}
              onClick={() => followUser(dispatch, currentUser, user)}
            >
              Follow
            </Button>
          )}
        </GridItem>
      )}
    </SimpleGrid>
  );
};
export default SingleUserFollow;
