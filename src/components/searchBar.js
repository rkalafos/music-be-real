import React, { useEffect, useState } from "react";
import { searchSongs } from "../actions/song-choice-actions";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@chakra-ui/react";
import SongChoice from "./songChoice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const songChoices = useSelector((state) => state.songChoices);
  const dispatch = useDispatch();

  // Updates the song choices every time the search query changes.
  useEffect(() => {
    if (searchQuery) {
      searchSongs(dispatch, searchQuery);
    }
  }, [dispatch, searchQuery]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <form action="/" method="get" />
      <Input
        type="text"
        id="song-search"
        color="black"
        placeholder="Search for a song..."
        name="s"
        onChange={handleSearchChange}
        value={searchQuery}
      />
      {songChoices?.songChoices?.map((song) => {
        return <SongChoice song={song} />;
      })}
    </>
  );
};
export default SearchBar;
