import { DefaultLayout } from "../layouts/DefaultLayout";
import {
  Box,
  Heading,
  Input,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSongs } from "../actions/song-choice-actions";
import { Form } from "react-bootstrap";
import SongChoice from "../components/songChoice";
import { useNavigate } from "react-router";
import PostSongModal from "../components/postSongModal";
import { createPost } from "../actions/post-actions";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [songToPost, setSongToPost] = useState({});
  const songChoices = useSelector((state) => state.songChoices);
  const currentUser = useSelector((state) => state.currentUser);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onClickSongDetails = (e, song) => {
    e.preventDefault();
    navigate(`/details/${song.id}`);
  };

  const onClickPostSong = (e, song) => {
    e.preventDefault();
    setSongToPost(song);
    onOpen();
  };

  const onPostSong = (caption) => {
    const post = {
      userId: currentUser._id,
      caption: caption,
      song_title: songToPost.title,
      track_id: songToPost.id,
      artist_name: songToPost.artist.name,
      album_cover: songToPost.album.cover_medium,
      album_name: songToPost.album.title,
    };
    createPost(dispatch, post).then(() => navigate("/"));
  };

  return (
    <DefaultLayout>
      <PostSongModal
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        song={songToPost}
        onPost={onPostSong}
      />
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
        <Form action="/" method="get" />
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
          return (
            <SongChoice
              key={song.id}
              song={song}
              onClickSongDetails={onClickSongDetails}
              onClickPostSong={onClickPostSong}
            />
          );
        })}
      </Box>
    </DefaultLayout>
  );
};
export default SearchPage;
