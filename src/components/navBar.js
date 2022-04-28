import React, { useEffect, useState, ReactNode } from "react";
import { searchSongs } from "../actions/song-choice-actions";
import { useDispatch, useSelector } from "react-redux";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useNavigate } from "react-router";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.currentUser);

  return (
    <>
      <Box mt={8} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack mr= '20px' spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {currentUser?.username ? (
              <div>
                  <Link
                    px={3}
                    py={2}
                    rounded={'md'}
                    color= 'white'
                    _hover={{
                      textDecoration: 'none',
                      bg: 'gray.200'
                    }}
                    onClick={() => navigate("/search")}>
                    Search
                  </Link>
                  <Link
                    px={3}
                    py={2}
                    rounded={'md'}
                    color= 'white'
                    _hover={{
                      textDecoration: 'none',
                      bg: 'gray.200'
                    }}
                    onClick={() => navigate(`/profile/${currentUser._id}`)}>
                    Profile
                  </Link>
                  </div>
              ) : (
              <div>
                <Link
                    px={3}
                    py={2}
                    rounded={'md'}
                    color= 'white'
                    _hover={{
                      textDecoration: 'none',
                      bg: 'gray.200'
                    }}
                    onClick={() => navigate("/search")}>
                    Search
                  </Link>
                  </div>
               )}
            </HStack>

          </HStack>
          <Flex alignItems={'center'}>
            <Box>
              {currentUser?.username ? (
              <div>
              </div>
              ) : (
                <div>
                  <Button
                    mr={4}
                    mb={2}
                    colorScheme={"red"}
                    onClick={() => navigate("/register")}
                    width='100px'
                  >
                    Register
                  </Button>
                  <Button
                    mr={4}
                    mb={2}
                    colorScheme={"teal"}
                    onClick={() => navigate("/login")}
                    width='100px'
                  >
                    Login
                  </Button>
                </div>
              )}
            </Box>

            <Menu>
              <MenuList>
                <MenuItem> </MenuItem>
                <MenuItem></MenuItem>
                <MenuItem> </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} width='100px' mt={2} spacing={4}>

                                    <Link
                                      px={3}
                                      py={2}
                                      rounded={'md'}
                                      color= 'white'
                                      _hover={{
                                        textDecoration: 'none',
                                        bg: 'gray.200'
                                      }}
                                      href= 'search'>
                                      Search
                                    </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
