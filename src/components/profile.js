import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Icon,
  useBreakpointValue,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';


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

const Profile = () => {
    // from my own
    const user_id = useSelector(state => state.user._id);
    // from the url
    // set to this user's id if none is provided
    const { profileId } = useParams();
    if (!profileId){
        profileId = user_id
    }
    //error if profile id requested does not exist

    // find the matching user in backend - finduserbyid
    // pull out fields
    return(
    <Box position={'relative'} >
        <Flex

              minH={'100vh'}
              align={'center'}
              justify={'center'}
              // bg={useColorModeValue('gray.50', 'gray.800')}
              >
              <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                  User Profile Edit
                </Heading>
                <FormControl id="userName">
                  <FormLabel>User Icon</FormLabel>
                  <Stack direction={['column', 'row']} spacing={6}>
                    <Center>

                      <Avatar size="xl">

                      </Avatar>
                    </Center>
                    <Center w="full">
                      <Button w="full">Change Icon</Button>
                    </Center>
                  </Stack>
                </FormControl>
                <FormControl id="firstName" isRequired>
                                  <FormLabel>First Name</FormLabel>
                                  <Input
                                    placeholder="First Name"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="text"
                                  />
                                </FormControl>
                <FormControl id="lastName" isRequired>
                                  <FormLabel>Last Name</FormLabel>
                                  <Input
                                    placeholder="Last Name"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="text"
                                  />
                                </FormControl>
                <FormControl id="userName" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    placeholder="Username"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                  />
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    placeholder="Password"
                    _placeholder={{ color: 'gray.500' }}
                    type="password"
                  />
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']}>
                  <Button
                    bg={'red.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                      bg: 'red.500',
                    }}>
                    Cancel
                  </Button>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Flex>
                          <Blur
                            position={'absolute'}
                            top={-10}
                            left={-10}
                            style={{ filter: 'blur(70px)' }}
                          />
                          </Box>

          );
        }

export default Profile;