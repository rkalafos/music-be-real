import React from "react";

import {Grid, GridItem, Text, Box, Avatar} from "@chakra-ui/react";

const Comment = ({ comment, }) => {
    return (
        <Box border={"1px"} borderColor={"gray.200"}>
            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(, 1fr)">
                <GridItem>
                    <Avatar
                        size="sm"
                        src={comment.avatarImage}
                        alt={comment.handle}
                    />
                    <Text><b>{comment.handle}</b></Text>
                </GridItem>
                <GridItem>
                    <Text>
                        {comment.comment}
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    );
};
export default Comment;
