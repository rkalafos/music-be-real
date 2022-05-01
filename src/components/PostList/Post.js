import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../../actions/post-actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import {
  Box,
  IconButton,
  Text,
  Avatar,
  Center,
  Stack,
  HStack,
  Spacer,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router";
import CommentModal from "../CommentModal";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const postedBy = useSelector((state) =>
    state.allUsers.find((user) => user?._id === post.userId)
  );
  let liked = post.liked.includes(currentUser?._id);
  let disliked = post.disliked.includes(currentUser?._id);

  const onClickLikePost = (e) => {
    e.preventDefault();
    liked = !liked;
    if (liked) {
      updatePost(dispatch, {
        _id: post._id,
        liked: [...post.liked, currentUser._id],
      });
    } else {
      updatePost(dispatch, {
        _id: post._id,
        liked: post.liked.filter((id) => id !== currentUser._id),
      });
    }
  };

  const onClickDislikePost = (e) => {
    e.preventDefault();
    disliked = !disliked;
    if (disliked) {
      updatePost(dispatch, {
        ...post,
        disliked: [...post.disliked, currentUser._id],
      });
    } else {
      updatePost(dispatch, {
        ...post,
        disliked: post.disliked.filter((id) => id !== currentUser._id),
      });
    }
  };

  const onClickComment = (e) => {
    e.preventDefault();
    onOpen();
  };

  const onComment = (comment) => {
    const newComment = {
      handle: currentUser.username,
      avatarImage: currentUser.avatarImage,
      comment: comment,
    };
    updatePost(dispatch, {
      ...post,
      comments: [...post.comments, newComment],
    }).then(() => onClose());
  };

  return (
    <>
      <CommentModal
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        post={post}
        onComment={onComment}
      />
      <Box borderWidth="2px" background="#C4C4C4">
        <div className="d-flex">
          {postedBy && (
            <SimpleGrid columns={[1, null, 2]} spacing={6}>
              <Box padding={4}>
                <Center w={"50%"}>
                  <img src={post.album_cover} alt="albumcover" />
                </Center>
              </Box>
              <Box>
                <Stack
                  direction={{ md: "column", lg: "row" }}
                  spacing={4}
                  margin={4}
                >
                  <Stack direction={"column"} spacing={4}>
                    <Stack direction={["column", "row"]} spacing={4}>
                      <HStack
                        spacing={4}
                        alignItems="center"
                        onClick={() => navigate(`/profile/${postedBy._id}`)}
                      >
                        <Avatar
                          size="sm"
                          src={postedBy.avatarImage}
                          alt={postedBy.username}
                        />
                        <Text color={"teal"}>
                          <b>{postedBy.username}</b>
                        </Text>
                        <Text>{new Date(post.date).toLocaleString()}</Text>
                      </HStack>
                      {(currentUser?._id === postedBy?._id ||
                        currentUser?.userType === "admin") && (
                        <Center>
                          <IconButton
                            onClick={() => deletePost(dispatch, post)}
                            aria-label="Delete post"
                            variant="outline"
                            colorScheme="teal"
                            size="sm"
                            icon={<BiTrash />}
                          />
                        </Center>
                      )}
                    </Stack>
                    <Box>
                      <Text
                        fontSize="1.2rem"
                        textAlign="left"
                        style={{ color: "black" }}
                      >
                        <b>{post.song_title}</b> {post.artist_name}
                      </Text>
                      <Text
                        textAlign="left"
                        style={{ color: "black" }}
                        mb={"4"}
                      >
                        {post.caption}
                      </Text>
                      {currentUser?.username && (
                        <HStack spacing={4} alignItems="center">
                          <span onClick={(e) => onClickLikePost(e)}>
                            <FontAwesomeIcon
                              icon={faThumbsUp}
                              color={liked ? "teal" : "black"}
                            />
                            {post.liked.length}
                          </span>
                          <span onClick={(e) => onClickDislikePost(e)}>
                            <FontAwesomeIcon
                              icon={faThumbsDown}
                              color={disliked ? "teal" : "black"}
                            />
                            {post.disliked.length}
                          </span>
                          <span onClick={(e) => onClickComment(e)}>
                            <FontAwesomeIcon icon={faComment} color={"black"} />
                            {post.comments.length}
                          </span>
                        </HStack>
                      )}
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </SimpleGrid>
          )}
        </div>
      </Box>
    </>
  );
};

export default Post;
