import React from "react";

import { Grid, GridItem, Text, Box, Avatar, HStack } from "@chakra-ui/react";

const Comment = ({ comment }) => {
  return (
    <Box border={"1px"} borderColor={"gray.200"}>
      <Grid p={4} templateRows="repeat(2, 1fr)" templateColumns="repeat(, 1fr)">
        <GridItem>
          <HStack spacing={4}>
            <Avatar size="sm" src={comment.avatarImage} alt={comment.handle} />
            <Text>
              <b>{comment.handle}</b>
            </Text>
          </HStack>
        </GridItem>
        <GridItem>
          <Text align="left">{comment.comment}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default Comment;
