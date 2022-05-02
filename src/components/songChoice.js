import { Text, Image, Box, Button, SimpleGrid } from "@chakra-ui/react";

const SongChoice = ({ song, onClickSongDetails, onClickPostSong }) => {
  return (
    <Box border={"1px"} borderColor={"gray.200"}>
      <SimpleGrid columns={[1, null, 5]}>
        <Box>
          <Image
            m={2}
            src={song.album.cover_small}
            alt={"album-cover for " + song.title}
          ></Image>
        </Box>
        <Box>
          <Text m={2} fontWeight={"bold"}>
            {song.title}
          </Text>
        </Box>
        <Box>
          <Text m={2}>{song.artist.name}</Text>
        </Box>
        <Box>
          <Button m={2} onClick={(e) => onClickSongDetails(e, song)}>
            Song Details
          </Button>
        </Box>
        <Box>
          <Button m={2} onClick={(e) => onClickPostSong(e, song)}>
            Post Song
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
export default SongChoice;
