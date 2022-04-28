import React from "react";
import {Button} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {deleteUser, updateUser} from "../actions/user-actions";

const AdminUser = (props) => {

    const dispatch = useDispatch();

    const handleMakeAdmin = () => {
        updateUser(dispatch, {"_id": props.user._id, "userType": "admin"})
    }

    const handleDelete = () => {
        deleteUser(dispatch, props.user);
    }

    return (
        <div style={{ margin: "10px"}}>
            <h1 style={{color: "white"}}> username: {props.user.username} </h1>
            <h1 style={{color: "white"}}> ID: {props.user._id} </h1>
            <Button onClick={() => handleMakeAdmin()}>
                Make Admin
            </Button>
            <Button colorScheme='red' onClick={() => handleDelete()}>
                Delete User
            </Button>
        </div>

    )

};

export default AdminUser;