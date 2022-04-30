import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deletePost} from "../../actions/post-actions";
import {updateUser} from "../../actions/user-actions";

import {
    Box,
    IconButton,
    Button,
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
                                        <Text>{postedBy.username}</Text>
                                        {(currentUser?._id !== postedBy?._id) && (
                                            <div>
                                                {currentUser?.following?.indexOf(postedBy?._id) > -1 ? (
                                                    <Button onClick={() => {
                                                     updateUser(dispatch, {
                                                        ...currentUser,
                                                        following: currentUser.following.push(postedBy?._id)
                                                      })

                                                     updateUser(dispatch, {
                                                        ...postedBy,
                                                        followers: postedBy.followers.push(currentUser?._id)
                                                      })
                                                      }}>
                                                        Follow
                                                    </Button>
                                                ):(
                                                    <Button onClick={() => {
                                                     updateUser(dispatch, {
                                                        ...currentUser,
                                                        following: currentUser.following.filter(id => id !== postedBy?._id)
                                                      })
                                                     updateUser(dispatch, {
                                                        ...postedBy,
                                                        followers: postedBy.followers.filter(id => id !== currentUser?._id)
                                                      })
                                                      }}>
                                                        Unfollow
                                                    </Button>
                                                )}
                                            </div>
                                        )}

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
