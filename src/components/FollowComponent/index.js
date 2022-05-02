import React from "react";
import { useSelector } from "react-redux";
import SingleUserFollow from "./singleUserFollow";
import { Box, Heading } from "@chakra-ui/react";

const FollowComponent = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const allUsers = useSelector((state) =>
    state.allUsers.filter((user) => user._id !== currentUser._id)
  );
  return (
    <Box>
      <Heading size={"md"} align={"center"} p={2}>
        Check Out Our Users
      </Heading>
      {allUsers.map((user) => (
        <SingleUserFollow key={user._id} user={user} />
      ))}
    </Box>
  );
};
export default FollowComponent;
