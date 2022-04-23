import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/user-actions";

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
} from "@chakra-ui/react";
import { Blur } from "./Blur";

const Register = () => {
  // functionaality pulled in from Tuiter proj
  let [firstname, setFirstName] = useState("");
  const dispatch = useDispatch();
  const userClickHandler = () => {
    dispatch({
      type: "create-user",
      // need to include lastname, username, and password too
      firstName: firstname,
    });
    createUser(dispatch, newUser);
  };
  const [newUser, setNewUser] = useState({ user: "New user" });

  return (
    <Stack spacing={4}>
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
      <Input
        name="firstname"
        placeholder="First Name"
        bg={"gray.100"}
        border={0}
        color={"gray.500"}
        _placeholder={{
          color: "gray.500",
        }}
        // this should be pulling the data from the input
        onChange={(event) => {
          setFirstName(event.target.value);
          setNewUser({ ...newUser, firstName: event.target.value });
        }}
      />
      <Input
        name="lastname"
        placeholder="Last Name"
        bg={"gray.100"}
        border={0}
        color={"gray.500"}
        _placeholder={{
          color: "gray.500",
        }}
      />
      <Input
        name="username"
        placeholder="Username"
        bg={"gray.100"}
        border={0}
        color={"gray.500"}
        _placeholder={{
          color: "gray.500",
        }}
      />
      <Input
        name="password"
        placeholder="Password"
        bg={"gray.100"}
        border={0}
        color={"gray.500"}
        _placeholder={{
          color: "gray.500",
        }}
      />
      <Box as={"form"} mt={10}>
        <Button
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
          onClick={userClickHandler}
        >
          Submit
        </Button>
      </Box>
      form
    </Stack>
  );
};

const Login = () => {
  return (
    <Stack spacing={4}>
      <Heading
        color={"gray.800"}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        Log In
      </Heading>
      <Input
        name="login-username"
        placeholder="Username"
        bg={"gray.100"}
        border={0}
        color={"gray.500"}
        _placeholder={{
          color: "gray.500",
        }}
      />
      <Input
        name="login-password"
        placeholder="Password"
        bg={"gray.100"}
        border={0}
        color={"gray.500"}
        _placeholder={{
          color: "gray.500",
        }}
      />
      <Box as={"form"} mt={10}>
        <Button
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
      </Box>
      form
    </Stack>
  );
};

class LoginRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  render() {
    return (
      <Box position={"relative"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              BeReal but for Music
            </Heading>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <div>
                <Button
                  onClick={this.toggleHidden.bind(this)}
                  fontFamily={"heading"}
                  mb={4}
                  w={"half"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  Click to Sign Up
                </Button>
                {!this.state.isHidden && <Register />}
                {this.state.isHidden && <Login />}
              </div>
            </Stack>
          </Stack>
        </Container>
        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
      </Box>
    );
  }
}

export default LoginRegister;
