import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, updatePost} from "../../actions/post-actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'


import {
    Box,
    IconButton,
    Text,
    Avatar,
    Center,
    Stack,
    HStack,
    Spacer,
} from "@chakra-ui/react";
import {BiTrash} from "react-icons/bi";
import {useNavigate} from "react-router";

const Post = ({post}) => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();
    const postedBy = useSelector((state) =>
        state.allUsers.find((user) => user?._id === post.userId)
    );
    const [liked, setLiked] = useState(post.liked.includes(currentUser?._id));
    const [disliked, setDisliked] = useState(post.disliked.includes(currentUser?._id));


    const onClickLikeSong = (e) => {
        e.preventDefault();
        setLiked(!liked);
        if (liked) {
            updatePost(dispatch, {
                ...post,
                liked: [...post.liked, currentUser._id]
            });
        } else {
            updatePost(dispatch, {
                ...post,
                liked: post.liked.filter((value) => value._id !== currentUser._id)
            });
        }
    }

    const onClickDislikeSong = (e) => {
        e.preventDefault();
        setDisliked(!disliked);
        if (disliked) {
            updatePost(dispatch, {
                ...post,
                disliked: [...post.disliked, currentUser._id]
            });
        } else {
            updatePost(dispatch, {
                ...post,
                disliked: post.disliked.filter((value) => value._id !== currentUser._id)
            });
        }
    }

    return (
        <>
            <Box borderWidth="2px" background="#C4C4C4">
                <div className="d-flex">
                    {postedBy && (
                        <Stack direction={["column", "row"]} spacing={6} margin={6}>
                            <Center w={"50%"}>
                                <img src={post.album_cover} alt="albumcover"/>
                            </Center>
                            <Stack direction={["row", "column"]} spacing={6}>
                                <Stack direction={["column", "row"]} spacing={6}>
                                    <HStack
                                        spacing={4}
                                        alignItems="center"
                                        onClick={() => navigate(`/profile/${postedBy._id}`)}
                                    >
                                        <Avatar
                                            size="md"
                                            src={postedBy.avatarImage}
                                            alt={postedBy.username}
                                        />
                                        <Text color={"teal"}><b>{postedBy.username}</b></Text>
                                        <Text>{new Date(post.date).toLocaleString()}</Text>
                                    </HStack>
                                    <Spacer/>
                                    {(currentUser?._id === postedBy?._id ||
                                        currentUser?.userType === "admin") && (
                                            <Center>
                                                <IconButton
                                                    onClick={() => deletePost(dispatch, post)}
                                                    aria-label="Delete post"
                                                    variant="outline"
                                                    colorScheme="teal"
                                                    size="sm"
                                                    icon={<BiTrash/>}
                                                />
                                            </Center>
                                    )}
                                </Stack>
                                <Box>
                                    <p style={{color: "black"}}>
                                        {" "}
                                        <b>{post.song_title}</b> {post.artist_name}{" "}
                                    </p>
                                    <Text style={{color: "black"}}>{post.caption}</Text>
                                    <HStack spacing={4} alignItems="center">
                                        <span onClick={(e) => onClickLikeSong(e)}>
                                            <FontAwesomeIcon icon={faThumbsUp} color={liked ? 'teal' : 'black'} />
                                            <Text>{post.liked.length}</Text>
                                        </span>
                                        <span onClick={(e) => onClickDislikeSong(e)}>
                                            <FontAwesomeIcon icon={faThumbsDown} color={disliked ? 'teal' : 'black'} />
                                            <Text>{post.disliked.length}</Text>
                                        </span>
                                    </HStack>
                                </Box>
                            </Stack>
                        </Stack>
                    )}
                </div>
            </Box>
        </>
    );
};

export default Post;
