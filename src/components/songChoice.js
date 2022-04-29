import { Grid, GridItem, Text, Image, Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const SongChoice = ({ song, onClickSongDetails, onClickPostSong }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const loggedIn = Object.keys(currentUser).length > 0;
  return (
    <Box border={"1px"} borderColor={"gray.200"}>
      <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(5, 1fr)">
        <GridItem>
          <Image
            m={2}
            src={song.album.cover_small}
            alt={"album-cover for " + song.title}
          ></Image>
        </GridItem>
        <GridItem>
          <Text m={2} fontWeight={"bold"}>
            {song.title}
          </Text>
        </GridItem>
        <GridItem>
          <Text m={2}>{song.artist.name}</Text>
        </GridItem>
        <GridItem>
          <Button m={2} onClick={(e) => onClickSongDetails(e, song)}>
            Song Details
          </Button>
        </GridItem>
        {loggedIn && (
          <GridItem>
            <Button m={2} onClick={(e) => onClickPostSong(e, song)}>
              Post Song
            </Button>
          </GridItem>
        )}
      </Grid>
    </Box>
  );
};
export default SongChoice;
