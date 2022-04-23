import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createUser, loginUser} from "../actions/user-actions";
import { Formik, Form, Field, ErrorMessage } from 'formik';
 

// add popup with terms and conditions - privacy policy
// user roles - select role
// user anonymous/ not logged in --> a flag
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  useBreakpointValue,
  Icon,
  color,
} from '@chakra-ui/react';
import { deleteUser } from "../services/user-services";

const Register = () => {
// functionaality pulled in from Tuiter proj
    
    const dispatch = useDispatch();
    const [newUser, setNewUser] =useState({user: 'New user'});

    const inputStyle = {
        backgroundColor: 'lightgrey',
        lineHeight: '1.1',
        color: 'grey.500',
        _placeholder: 'gray.500',
        border: '0',
        marginTop: "10px"
    }

    const btnStyle = {
        background: "red",
        marginTop: "10px"
        // TODO: SET BUTTON STYLING HERE 
    };

    return (

        <Stack spacing={4}>
        <Heading
            color={'gray.800'}
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
            Join Us
            <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
                </Text>
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            We have made a cool music app</Text>

            <Formik
             initialValues={{ username: '', email: '', password: '' }}
             validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                // TODO: check here if a username exists using findUserByID API Route.
                
                return errors;
             }}
             onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    
                  alert(JSON.stringify(values));
                  createUser(dispatch, values);
                  setSubmitting(false);
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

                        <button type="submit" disabled={isSubmitting} style={btnStyle}>
                            Submit
                        </button>
                    </Form>
                )}
     </Formik>

        <Box as={'form'} mt={10}>
            <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={'white'}
                _hover={{
                    bgGradient: 'linear(to-r, red.400,pink.400)',
                    boxShadow: 'xl',
                }}
                // clicking submit triggers creation of new user
                >
                Submit
            </Button>
        </Box>
        form
    </Stack>
);};

const Login = () => {

    const dispatch = useDispatch();

    const btnStyle = {
        background: "red",
        marginTop: "10px"
        // TODO: SET BUTTON STYLING HERE 
    };

    const inputStyle = {
        backgroundColor: 'lightgrey',
        lineHeight: '1.1',
        color: 'grey.500',
        _placeholder: 'gray.500',
        border: '0',
        marginTop: "10px"
    }

    return (
        <Stack spacing={4}>
            <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                    Log In
            </Heading>
            <Formik
             initialValues={{ username: '', email: '', password: '' }}
             validate={values => {
                const errors = {};
                if (!values.username) {
                  errors.username = 'Required';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                // TODO: check here if a username exists using findUserByID API Route.
                
                
                return errors;
             }}
             onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    
                  alert(JSON.stringify(values));
                  // TODO LOG IN USER
                  const test = loginUser(dispatch, values);
                  console.log(test);
                  setSubmitting(false);
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

                        <button type="submit" disabled={isSubmitting} style={btnStyle}>
                            Submit
                        </button>
                    </Form>
                )}
     </Formik>

            <Box as={'form'} mt={10}>
                <Button
                    fontFamily={'heading'}
                    mt={8}
                    w={'full'}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    color={'white'}
                    _hover={{
                        bgGradient: 'linear(to-r, red.400,pink.400)',
                        boxShadow: 'xl',
                    }}>
                    Submit
                </Button>
            </Box>
            form
        </Stack>
    );
};


export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '60vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="671" cy="661" r="211" fill="#F56565" />
      <circle cx="644" cy="108" r="139" fill="#4299E1" />

      <circle cx="471" cy="461" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

class LoginRegister extends React.Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
        <Box position={'relative'} >
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                  <Heading
                    lineHeight={1.1}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                    BeReal but for Music
                  </Heading>
                </Stack>
                <Stack
                  bg={'gray.50'}
                  rounded={'xl'}
                  p={{ base: 4, sm: 6, md: 8 }}
                  spacing={{ base: 8 }}
                  maxW={{ lg: 'lg' }}>
                  <Stack spacing={4}>
                      <div>
                        <Button onClick={this.toggleHidden.bind(this)}
                            fontFamily={'heading'}
                            mb={4}
                            w={'half'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                boxShadow: 'xl',
                            }}>
                            Click to Sign Up
                        </Button>
                        {!this.state.isHidden && <Register />}
                        {this.state.isHidden && <Login />}
                      </div>
                  </Stack>
                </Stack>
            </Container>
              <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
              />
        </Box>
    )
  }
}

export default LoginRegister;