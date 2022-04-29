import {Heading, HStack} from "@chakra-ui/react";
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
        fontSize={{ base: "5xl", sm: "5xl", md: "5xl" }}
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
