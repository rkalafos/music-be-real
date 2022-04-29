import React from "react";
import { Header } from "../components/Header";
import { Blur } from "../components/Blur";
import { Box, VStack, Stack, Center } from "@chakra-ui/react";
export const DefaultLayout = ({ children }) => {
  return (

    <Box position={"relative"}>
      <VStack>
        <Header />
        <Stack as={Center} direction={"row"} w={"100%"}>
          {children}
        </Stack>
      </VStack>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
};