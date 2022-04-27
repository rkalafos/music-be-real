import React from "react";
import { useSelector } from "react-redux";

const PostList = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <>
      <div>
        This is the list of posts for user <b>{currentUser.username}.</b>
      </div>
    </>
  );
};
export default PostList;
