import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { deletePost } from '../../actions/post-actions';
import { getSongById } from '../../actions/song-choice-actions';

import {
    Box, Heading,
    IconButton, Text
} from "@chakra-ui/react";
import {BiTrash} from "react-icons/bi";

const Post = ({post}) => {
    const currentUser = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();
    const postedBy = useSelector((state) => state.allUsers.find(user => user?._id === post.userId));
    const track = getSongById(dispatch, post.trackId);
    console.log(post);
    return (
        <>
            <Box
                borderRadius="sm"
                background="#C4C4C4"
                boxShadow="md"
            >
                <div className="d-flex">
                    <div className="col-1 ">
                        {/*{*/}
                        {/*    postedBy.avatarImage &&*/}
                        {/*    <img className="img img-responsive rounded-circle" width="100%"*/}
                        {/*         src={postedBy.avatarImage} alt={post.postedBy.username}/>*/}
                        {/*}*/}
                    </div>
                    <Heading>
                        {post.postedBy.username}
                    </Heading>
                    <Text style={{color: "white"}}>
                        {post.caption}
                    </Text>
                    {
                        track &&
                        <div>
                            <p style={{color: "white"}}> Song: {track.title} By: {track.artist.name} </p>
                            <img src={track.album.cover_small} alt="albumcover"/>
                        </div>
                    }


                    {(currentUser._id === postedBy._id  || currentUser.type == "admin") && (
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