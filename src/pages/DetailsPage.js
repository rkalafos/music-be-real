import { DefaultLayout } from "../layouts/DefaultLayout";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getSongById } from "../actions/song-choice-actions";
import React, { useEffect, useState } from "react";
import { createPost } from "../actions/post-actions";
import PostSongModal from "../components/postSongModal";
import PostList from "../components/PostList";

const DetailsPage = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [songToPost, setSongToPost] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { songId } = useParams();
  const dispatch = useDispatch();
  const songDetails = useSelector((state) => state.songChoices.track);
  useEffect(() => {
    getSongById(dispatch, songId);
  }, [dispatch, songId]);

  const onClickPostSong = (e, songDetails) => {
    if (currentUser._id) {
      e.preventDefault();
      setSongToPost(songDetails);
      onOpen();
    } else {
      navigate("/register");
    }
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
        {songDetails?.title && (
          <div>
            <Heading color={"teal"}>{songDetails.title}</Heading>
            <SimpleGrid columns={[1, null, 2]} spacing={6}>
              <Box>
                <Text>
                  <b>Artist</b>
                </Text>
                <Text>{songDetails.artist.name}</Text>
                <Image
                  src={songDetails.artist.picture}
                  alt={songDetails.artist.name}
                />
              </Box>
              <Box>
                <Text>
                  <b>Album</b>
                </Text>
                <Text>{songDetails.album.title}</Text>
                <Image
                  src={songDetails.album.cover}
                  alt={songDetails.album.title}
                />
              </Box>
              <Box>
                <Text>
                  <b>Song Preview</b>
                </Text>
                <Text>
                  Total duration: {Math.floor(songDetails.duration / 60)}:
                  {(songDetails.duration % 60).toString().padStart(2, "0")}
                </Text>
                <audio controls>
                  <source src={songDetails.preview} type="audio/mpeg" />
                  Browser does not support audio playback
                </audio>
              </Box>
              <Box>
                <Text>
                  <b>Song Details</b>
                </Text>
                <Text>
                  {" "}
                  Released {new Date(songDetails.release_date).toDateString()}
                </Text>
                {/*some issues of missing bpm for newer songs*/}
                {songDetails.bpm !== 0 && (
                  <Text>
                    This song has a BPM of {songDetails.bpm}
                    {songDetails.bpm > 100
                      ? "! Get dancin'!"
                      : ". This might be a downer."}
                  </Text>
                )}
                <Text>
                  {songDetails.explicit_lyrics
                    ? "Explicit lyrics!!! (be safe)"
                    : "No explicit lyrics"}
                </Text>
                <Button m={2} onClick={(e) => onClickPostSong(e, songDetails)}>
                  Post Song
                </Button>
              </Box>
            </SimpleGrid>
            <PostList />
          </div>
        )}
      </Box>
    </DefaultLayout>
  );
};
export default DetailsPage;
