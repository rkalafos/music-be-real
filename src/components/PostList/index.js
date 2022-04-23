import React from 'react';
import {useSelector} from "react-redux";


const PostList = () => {
  const user = useSelector(state => state.user);
  return (
      <>
        <div>This is the list of posts for user <b>{user.username}.</b></div>
      </>
  )
};
export default PostList;
