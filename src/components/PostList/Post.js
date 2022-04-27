import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { deletePost } from '../../actions/post-actions';
import {findUserByID} from "../../actions/user-actions";
import {
    Box, Heading,
    IconButton, Text
} from "@chakra-ui/react";
import {BiTrash} from "react-icons/bi";

const Post = ({post}) => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const postedBy = findUserByID(dispatch, post.userId);
    console.log(post);
    // TODO: either connect trackId to deezer to pull necessary info or have that included on createPost
    return (
        <>
            <Box
                borderRadius="sm"
                background="#C4C4C4"
                boxShadow="md"
            >
                <div className="d-flex">
                    <div className="col-1 ">
                        <img className="img img-responsive rounded-circle" width="100%"
                             src={postedBy.avatarImage} alt={post.postedBy.username}/>
                    </div>
                    <Heading>
                        {post.postedBy.username}
                    </Heading>
                    <Text style={{color: "white"}}>
                        {post.caption}
                    </Text>
                    {user._id === postedBy._id && (
                        <IconButton
                            onClick={() => deletePost(dispatch, post)}
                            aria-label='Delete post'
                            variant='outline'
                            colorScheme='teal'
                            icon={<BiTrash/>}
                        />
                    )}
                </div>
            </Box>
        </>
    );
}

export default Post;