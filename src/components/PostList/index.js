import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from '../../actions/post-actions';
import {Stack} from '@chakra-ui/react'
import Post from './Post';

const PostList = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const posts = useSelector((state) => state.posts);

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
            <div>
                {
                    posts.filter && posts.filter((post) => {
                        const currentRoute = window.location.pathname.split('/');
                        if (currentRoute[1] === 'profile') {
                            return post.userId === currentRoute[2];
                        }
                        if (currentUser.userType === 'admin' ||
                            currentUser.following.includes(post.userId) ||
                            post.userId === currentUser._id) {
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
