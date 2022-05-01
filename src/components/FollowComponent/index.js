import React from 'react';
import {useSelector} from "react-redux";
import SingleUserFollow from "./singleUserFollow";
import {Box} from "@chakra-ui/react";

const FollowComponent = () => {
  const allUsers = useSelector((state) => state.allUsers);
  return(
    <Box>
      {allUsers.map((user) => <SingleUserFollow user={user} />)}
    </Box>
  )
}
export default FollowComponent;