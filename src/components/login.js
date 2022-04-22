import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from '@chakra-ui/react';

const Register = () => {
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
        <Input
            placeholder="First Name"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
                color: 'gray.500',
            }}
        />
        <Input
            placeholder="Last Name"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
                color: 'gray.500',
            }}
        />
        <Input
            placeholder="Username"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
                color: 'gray.500',
            }}
        />
        <Input
            placeholder="Password"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
                color: 'gray.500',
            }}
        />
    </Stack>
);};

const Login = () => {
    return (
        <Stack spacing={4}>
            <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                    Log In
            </Heading>
            <Input
                placeholder="Username"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                    color: 'gray.500',
                }}
            />
            <Input
                placeholder="Password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                    color: 'gray.500',
                }}
            />
        </Stack>
    );
};


export const Blur = (props: IconProps) => {
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