import {Avatar, Box} from "@chakra-ui/react";

const SingleUserFollow = (user) => {
  return(
    <Box bg={"white"}>
      <Avatar src={user.avatarImage} />
    </Box>
  )
}
export default SingleUserFollow;