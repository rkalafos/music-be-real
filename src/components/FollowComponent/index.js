import React from 'react';
import {useSelector} from "react-redux";
import SingleUserFollow from "./singleUserFollow";
import {Box, Heading} from "@chakra-ui/react";

const FollowComponent = () => {
  const allUsers = useSelector((state) => state.allUsers);
  return(
    <Box>
      <Heading size={"md"} align={"center"} p={2}>Check Out Our Users</Heading>
      {allUsers.map((user) => <SingleUserFollow user={user} />)}
    </Box>
  )
}
export default FollowComponent;