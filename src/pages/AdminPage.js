import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "@chakra-ui/react";
import AdminUser from "../components/adminUser";

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
    <>
      <Button
        onClick={() => {
          navigate(`/profile/${currentUser["_id"]}`);
        }}
      >
        To Profile
      </Button>
      <h1 style={{ color: "white" }}> Welcome to Admin Page </h1>
      {userDivs}
    </>
  );
};

export default AdminPage;
