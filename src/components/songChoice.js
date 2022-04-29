import {Grid, GridItem, Text, Image, Box, Button} from "@chakra-ui/react";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";

const SongChoice = ({song}) => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.currentUser);

    return (
        <Box key={song.id} border={"1px"} borderColor={"gray.200"}>
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
                    <Button m={2} onClick={() => navigate(`/details/${song.id}`)}>
                        Song Details
                    </Button>
                </GridItem>
                <GridItem>
                    {
                        currentUser?.username ? (
                            <Button m={2}>Post Song</Button>
                        ) : (
                            <Text m={2}>Join to post!</Text>
                        )
                    }
                </GridItem>
            </Grid>
        </Box>
    );
};
export default SongChoice;
