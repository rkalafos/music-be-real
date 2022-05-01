import {Avatar, Button, Grid, GridItem, VStack, Text, SimpleGrid} from "@chakra-ui/react";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";

const SingleUserFollow = ({user}) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const isLoggedIn = !!currentUser?.username;
  const isFollowing = currentUser?.following?.includes(user._id);
  return(
    <SimpleGrid
      p={2}
      gap={2}
      templateColumns={`repeat(${isLoggedIn ? 4 : 3}, 1fr)`}
      bg={"white"}
      border={"2px"}
      borderColor={"gray.200"}
    >
      <GridItem>
        <Avatar src={user.avatarImage} />
      </GridItem>
      <GridItem>
        <Text>@{user.username}</Text>
      </GridItem>
      <GridItem>
        <Button onClick={() => navigate(`/profile/${user._id}`)}>View Profile</Button>
      </GridItem>
      {isLoggedIn &&
        <GridItem>
          {isFollowing ? (
            <Button bgColor={"gray.200"}>Following</Button>
            ) : (
              <Button bgColor={"teal.400"} color={"white"}>Follow</Button>
            )
          }
        </GridItem>
      }
    </SimpleGrid>
  )
}
export default SingleUserFollow;