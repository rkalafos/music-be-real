import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
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

const EditProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const userEmpty = Object.keys(currentUser).length === 0;
  const [showSaveError, setSaveError] = useState(false);
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
      <Stack
        align={"center"}
        justify={"center"}
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
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
          <div>
            <FormControl id="userName">
              <FormLabel>User Icon</FormLabel>
              <Stack direction={["column", "row"]} spacing={6}>
                <Center>
                  <Avatar size="xl"></Avatar>
                </Center>
                <Center w="full">
                  <Button w="full">Change Icon</Button>
                </Center>
              </Stack>
            </FormControl>
            <Formik
              initialValues={{
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
                updateUser(dispatch, { ...values, _id: currentUser._id }).catch(
                  () => setSaveError(true)
                );
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field name="firstName">
                    {({ field, form }) => (
                      <Input
                        style={inputStyle}
                        {...field}
                        type="text"
                        placeholder="First Name"
                      />
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ field, form }) => (
                      <Input
                        style={inputStyle}
                        {...field}
                        type="text"
                        placeholder="Last name"
                      />
                    )}
                  </Field>
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
          </div>
        )}
      </Stack>
    </DefaultLayout>
  );
};
export default EditProfilePage;
