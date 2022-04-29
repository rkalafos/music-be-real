import { Heading, Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import NavBar from "./navBar";
import React from "react";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem colSpan={1}>
        <Heading
          onClick={() => navigate("/")}
          color={"white"}
          fontWeight={600}
          fontSize={{ base: "5xl", sm: "5xl", md: "5xl" }}
          lineHeight={1.5}
          opacity={"100%"}
          mt={10}
        >
          MusicBeReal.
        </Heading>
      </GridItem>
      <GridItem colSpan={4}>
        <NavBar />
      </GridItem>
    </Grid>
  );
};
