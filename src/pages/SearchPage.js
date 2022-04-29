import { DefaultLayout } from "../layouts/DefaultLayout";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import SearchBar from "../components/searchBar";

const SearchPage = () => {
  return (
    <DefaultLayout>
      <Box
        align={"center"}
        justify={"center"}
        spacing={4}
        w={"80%"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading color={"teal"}>Search for a Song!</Heading>
        <SearchBar />
      </Box>
    </DefaultLayout>
  );
};
export default SearchPage;
