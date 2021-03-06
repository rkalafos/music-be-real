import {
  Avatar,
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { updateUser } from "../actions/user-actions";
import { useNavigate } from "react-router";
import { loginUser } from "../actions/current-user-actions";

const EditProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const userEmpty = Object.keys(currentUser).length === 0;
  const [showSaveError, setSaveError] = useState(false);
  const avatar =
    currentUser?.avatarImage?.length > 0 ? currentUser.avatarImage : "";
  const inputStyle = {
    backgroundColor: "lightgrey",
    lineHeight: "1.1",
    color: "grey.500",
    _placeholder: "gray.500",
    border: "0",
    margin: "10px",
  };
  return (
    <DefaultLayout>
      <Stack
        align={"center"}
        justify={"center"}
        spacing={2}
        w={"70%"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Profile
        </Heading>
        {showSaveError && (
          <Box bg={"red.100"}>
            There was an error saving your data. Please try again.
          </Box>
        )}
        {userEmpty ? (
          <VStack>
            <Box bg={"red.100"}>Please sign in to edit your profile!</Box>
            <Button onClick={() => navigate("/login")}>Go to Login</Button>
          </VStack>
        ) : (
          <Box w={"80%"}>
            <Center>
              <Avatar
                size="xl"
                name={currentUser?.username}
                src={avatar}
              ></Avatar>
            </Center>
            <Formik
              initialValues={{
                avatarImage: currentUser.avatarImage,
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                username: currentUser.username,
                email: currentUser.email,
                password: currentUser.password,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "Required";
                }
                if (!values.password) {
                  errors.password = "Required";
                }
                return errors;
              }}
              onSubmit={(values) => {
                updateUser(dispatch, { ...values, _id: currentUser._id })
                  .then(() => loginUser(dispatch, currentUser))
                  .then(() => navigate(`/profile/${currentUser._id}`))
                  .catch(() => setSaveError(true));
              }}
            >
              {({ isSubmitting }) => (
                <Form w={"100%"}>
                  <FormLabel htmlFor="avatarImage">Avatar Image</FormLabel>
                  <Field name="avatarImage">
                    {({ field, form }) => (
                      <Input
                        id="avatarImage"
                        style={inputStyle}
                        {...field}
                        type="text"
                        placeholder="Insert a weblink to your avatar image"
                      />
                    )}
                  </Field>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Field name="firstName">
                    {({ field, form }) => (
                      <Input
                        style={inputStyle}
                        id="firstName"
                        {...field}
                        type="text"
                        placeholder="First Name"
                      />
                    )}
                  </Field>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Field name="lastName">
                    {({ field, form }) => (
                      <Input
                        id="lastName"
                        style={inputStyle}
                        {...field}
                        type="text"
                        placeholder="Last name"
                      />
                    )}
                  </Field>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Field name="username">
                    {({ field, form }) => (
                      <Input
                        id="username"
                        style={inputStyle}
                        {...field}
                        type="text"
                        placeholder="Username"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="username" component="div" />
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Field name="email">
                    {({ field, form }) => (
                      <Input
                        id="email"
                        style={inputStyle}
                        {...field}
                        type="text"
                        placeholder="Email"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="email" component="div" />
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field name="password">
                    {({ field, form }) => (
                      <Input
                        id="password"
                        style={inputStyle}
                        {...field}
                        type="password"
                        placeholder="Password"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="password" component="div" />
                  <HStack m={3}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
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
                      Save
                    </Button>
                  </HStack>
                </Form>
              )}
            </Formik>
          </Box>
        )}
      </Stack>
    </DefaultLayout>
  );
};
export default EditProfilePage;
