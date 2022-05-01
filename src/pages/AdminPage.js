import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {Box, Button} from "@chakra-ui/react";
import AdminUser from "../components/adminUser";
import { DefaultLayout } from "../layouts/DefaultLayout";


const AdminPage = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const users = useSelector((state) => state.allUsers);

  const userDivs = [];
  users.forEach((u) => {
    userDivs.push(
      <div key={u._id}>
        {" "}
        <AdminUser user={u} />{" "}
      </div>
    );
  });
  return (
    <DefaultLayout >
        <Box  w={"80%"} align={"center"}>
              <h1 style={{ color: "white" }}> Welcome to Admin Page </h1>
              {userDivs}

        </Box>
    </DefaultLayout>
  );
};

export default AdminPage;
