import { Heading, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import NavBar from "./navBar";
import React from "react";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HStack>
      <Heading
        onClick={() => navigate("/")}
        color={"white"}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "3xl", md: "3xl"}}
        opacity={"100%"}
        border={"1px"}
        borderColor={"white"}
        p={5}
        m={10}
      >
        MusicBeReal.
      </Heading>
      <NavBar />
    </HStack>
  );
};
