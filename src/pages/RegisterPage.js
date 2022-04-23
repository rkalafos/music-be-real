import { DefaultLayout } from "../layouts/DefaultLayout";
import { Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <Heading>
        This is going to be where we insert the registration logic.
      </Heading>
      <Button onClick={() => navigate("/login")}>
        Already have an account?
      </Button>
    </DefaultLayout>
  );
};
export default RegisterPage;
