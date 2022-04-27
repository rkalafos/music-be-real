import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from '../../actions/post-actions';
import {Stack, HStack, VStack, useColorModeValue, Heading} from '@chakra-ui/react'
import Post from'./Post';

const PostList = () => {
    const user = useSelector((state) => state.user);
    // TODO: filter usertype & page
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => { findAllPosts(dispatch) }, [dispatch]);

    return (
        <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
        >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                Welcome back <b>{user.username}! </b>
            </Heading>
            <div>
                {
                    posts.map && posts.map(post =>
                        <Post key={post._id} post={post}/>)
                }
            </div>
        </Stack>
    );
};
export default PostList;
