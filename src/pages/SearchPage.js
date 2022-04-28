import React from "react";
import SearchBar from "../components/searchBar";
import { DefaultLayout } from "../layouts/DefaultLayout";

const SearchPage = () => {
  return (
    <DefaultLayout>
      <h1 style={{ color: "white" }}>Search Page</h1>
      <SearchBar />
    </DefaultLayout>
  );
};
export default SearchPage;
