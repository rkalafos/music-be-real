import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../actions/user-actions";

const AdminUser = (props) => {
  const dispatch = useDispatch();

  const handleMakeAdmin = () => {
    updateUser(dispatch, { _id: props.user._id, userType: "admin" });
  };

  const handleDelete = () => {
    deleteUser(dispatch, props.user);
  };

  return (
    <div style={{ margin: "10px", borderRadius: "10px", backgroundColor: "#E0E0E0"}}>
      <h1 style={{ color: "black" }}> username: {props.user.username} </h1>
      <h1 style={{ color: "black" }}> ID: {props.user._id} </h1>
      <Button style={{margin: "5px"}} onClick={() => handleMakeAdmin()}>Make Admin</Button>
      <Button style={{margin: "5px"}} colorScheme="red" onClick={() => handleDelete()}>
        Delete User
      </Button>
    </div>
  );
};

export default AdminUser;
