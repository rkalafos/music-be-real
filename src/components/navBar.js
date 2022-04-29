import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { logoutUser } from "../actions/current-user-actions";

function NavLink(tab) {
  return (
    <Link
      key={tab.name}
      px={3}
      py={2}
      rounded={"md"}
      color="white"
      _hover={{
        textDecoration: "none",
        bg: "gray.200",
      }}
      onClick={tab.onClick}
    >
      {tab.name}
    </Link>
  );
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  // If you want to add a nav tab, just add the name and link here, then add to the navtab logic below
  // to determine when it should be seen
  const searchTab = {
    name: "Songs",
    onClick: () => navigate("/search")
  };
  const profileTab = {
    name: "Profile",
    onClick: () => navigate(`/profile/${currentUser._id}`),
  };
  const registerTab = {
    name: "Register",
    onClick: () => navigate("/register"),
  };
  const loginTab = {
    name: "Login",
    onClick: () => navigate("/login")
  };
  const logoutTab = {
    name: "Log out",
    onClick: () => {
      logoutUser(dispatch);
      navigate("/");
    },
  };

  const navTabData =
    Object.keys(currentUser).length === 0
      ? [searchTab, registerTab, loginTab]
      : [searchTab, profileTab, logoutTab];

  return (
    <>
      <Box mt={8} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack mr="20px" spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {navTabData.map((tab) => NavLink(tab))}
            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} width="100px" mt={2} spacing={4}>
              {navTabData.map((tab) => NavLink(tab))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
