import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from '../../actions/post-actions';
import {Stack, Heading} from '@chakra-ui/react'
import Post from './Post';
import {useParams} from "react-router";

const PostList = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const posts = useSelector((state) => state.posts);
    const {profileId} = useParams();
    // if (posts) {
    //     const userType = currentUser.userType;
    //     const currentRoute = window.location.pathname;
    //     posts.filter((post) => {
    //         if (currentRoute === 'profile') {
    //             return post.userId === profileId;
    //         }
    //        if (userType === 'admin') {
    //            return true;
    //        }
    //        if (currentUser.following.includes(post.userId) || post.userId === currentUser._id) {
    //            return true;
    //        }
    //        else {
    //            return false;
    //        }
    //     });
    // };
    const dispatch = useDispatch();
    useEffect(() => {
        findAllPosts(dispatch)
    }, [dispatch, posts]);

    return (
        <Stack
            spacing={4}
            w={"full"}
            p={6}
            my={12}
        >
            <Heading lineHeight={1.1} fontSize={{base: "2xl", sm: "3xl"}}>
                Welcome back <b>{currentUser.username}! </b>
            </Heading>
            <div>
                {
                    posts.filter && posts.filter((post) => {
                        const userType = currentUser.userType;
                        const currentRoute = window.location.pathname;
                        if (currentRoute === 'profile') {
                            return post.userId === profileId;
                        }
                        if (userType === 'admin' || currentUser.following.includes(post.userId) || post.userId === currentUser._id) {
                            return true;
                        } else {
                            return false;
                        }
                    }).map(post =>
                        <Post key={post._id} post={post}/>)
                }
            </div>
        </Stack>
    );
};
export default PostList;
