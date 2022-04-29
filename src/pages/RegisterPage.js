import { DefaultLayout } from "../layouts/DefaultLayout";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import React from "react";
import { createUser } from "../actions/user-actions";
import { ErrorMessage, Field, Form, Formik } from "formik";

const RegisterPage = () => {
  const inputStyle = {
    backgroundColor: "lightgrey",
    lineHeight: "1.1",
    color: "grey.500",
    _placeholder: "gray.500",
    border: "0",
    marginTop: "10px",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <DefaultLayout>
      <Box bg="white" p={6} align={"center"}>
        <Heading
          color={"gray.800"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        >
          Join Us
          <Text
            as={"span"}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
          >
            !
          </Text>
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
          We have made a cool music app
        </Text>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            // TODO: check here if a username exists using findUserByID API Route.
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              createUser(dispatch, values);
              setSubmitting(false);
              navigate("/login");
            }, 400);
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
              <Field name="firstname">
                {({ field, form }) => (
                  <Input
                    style={inputStyle}
                    {...field}
                    type="text"
                    placeholder="First Name"
                  />
                )}
              </Field>
              <ErrorMessage name="firstname" component="div" />
              <Field name="lastname">
                {({ field, form }) => (
                  <Input
                    style={inputStyle}
                    {...field}
                    type="text"
                    placeholder="Last Name"
                  />
                )}
              </Field>
              <ErrorMessage name="lastname" component="div" />
              <Field name="email">
                {({ field, form }) => (
                  <Input
                    style={inputStyle}
                    {...field}
                    type="text"
                    placeholder="Email"
                  />
                )}
              </Field>
              <ErrorMessage name="email" component="div" />

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
                // clicking submit triggers creation of new user
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <Button m={5} onClick={() => navigate("/login")}>
          Already have an account?
        </Button>
      </Box>
    </DefaultLayout>
  );
};
export default RegisterPage;
