import { DefaultLayout } from "../layouts/DefaultLayout";
import { useNavigate } from "react-router";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import React from "react";
import { loginUser } from "../actions/user-actions";
import { ErrorMessage, Field, Form, Formik } from "formik";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputStyle = {
    backgroundColor: "lightgrey",
    lineHeight: "1.1",
    color: "grey.500",
    _placeholder: "gray.500",
    border: "0",
    marginTop: "10px",
  };
  return (
    <DefaultLayout>
      <Box bg="white" p={6} align={"center"}>
        <Heading
          color={"gray.800"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        >
          Log In
        </Heading>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            // TODO: check here if a username exists using findUserByID API Route.

            return errors;
          }}
          onSubmit={(values) => {
            loginUser(dispatch, values).then(() => navigate("/"));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="username">
                {({ field, form }) => (
                  <Input
                    style={inputStyle}
                    {...field}
                    type="text"
                    placeholder="Username"
                  />
                )}
              </Field>
              <ErrorMessage name="username" component="div" />
              <Field name="password">
                {({ field, form }) => (
                  <Input
                    style={inputStyle}
                    {...field}
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Field>
              <ErrorMessage name="password" component="div" />
              <Button
                type="submit"
                disables={isSubmitting}
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <Button m={5} onClick={() => navigate("/register")}>
          Need to register for an account?
        </Button>
      </Box>
    </DefaultLayout>
  );
};
export default LoginPage;
