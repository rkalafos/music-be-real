import { DefaultLayout } from "../layouts/DefaultLayout";
import { useNavigate } from "react-router";
import { Button, Heading } from "@chakra-ui/react";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <Heading>This is going to be where we insert the login logic.</Heading>
      <Button onClick={() => navigate("/register")}>
        Need to register for an account?
      </Button>
    </DefaultLayout>
  );
};
export default LoginPage;
