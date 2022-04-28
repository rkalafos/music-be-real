import React, { useEffect, useState } from "react";
import { searchSongs } from "../actions/song-choice-actions";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const songChoices = useSelector((state) => state.songChoices);
  const dispatch = useDispatch();
  let songsToDisplay = [];
  if (songChoices.songChoices) {
    songsToDisplay = [];
    songChoices.songChoices.forEach((element) => {
      console.log(element);
      songsToDisplay.push(
        <div key={element.id}>
          <p style={{ color: "white" }}>
            {" "}
            Song: {element.title} By: {element.artist.name}{" "}
          </p>
          <img src={element.album.cover_small} alt="albumcover" />
        </div>
      );
    });
  }

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
      <label style={{ color: "white" }}>
        Search for a Song:
        <input
          type="text"
          id="song-search"
          color="black"
          placeholder="Search for a song..."
          name="s"
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </label>
      {songsToDisplay}
    </>
  );
};
export default SearchBar;
