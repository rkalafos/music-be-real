import {DefaultLayout} from "../layouts/DefaultLayout";
import {Box, Button, Grid, GridItem, Heading, Image, Text, useColorModeValue} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getSongById} from "../actions/song-choice-actions";
import React, {useEffect} from "react";

const DetailsPage = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const {songId} = useParams();
    const dispatch = useDispatch();
    const songDetails = useSelector((state) => state.songChoices.track);
    useEffect(() => {
        getSongById(dispatch, songId);
    }, [dispatch, songId]);

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
                {
                    songDetails?.title &&
                    <div>
                        <Heading color={"teal"}>{songDetails.title}</Heading>
                        <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={6}>
                            <GridItem>
                                <Text><b>Artist</b></Text>
                                <Text>{songDetails.artist.name}</Text>
                                <Image src={songDetails.artist.picture} alt={songDetails.artist.name}/>
                            </GridItem>
                            <GridItem>
                                <Text><b>Album</b></Text>
                                <Text>{songDetails.album.title}</Text>
                                <Image src={songDetails.album.cover} alt={songDetails.album.title}/>
                            </GridItem>
                            <GridItem>
                                <Text><b>Song Preview</b></Text>
                                <Text>Total duration: {Math.floor(songDetails.duration / 60)}:{(songDetails.duration % 60).toString().padStart(2, '0')}</Text>
                                <audio controls>
                                    <source src={songDetails.preview} type="audio/mpeg"/>
                                    Browser does not support audio playback
                                </audio>
                            </GridItem>
                            <GridItem>
                                <Text><b>Song Details</b></Text>
                                <Text> Released {new Date(songDetails.release_date).toDateString()}</Text>
                                {/*some issues of missing bpm for newer songs*/}
                                {songDetails.bpm !== 0 &&
                                    <Text>This song has a BPM
                                        of {songDetails.bpm}{songDetails.bpm > 100 ? "! Get dancin'!" : ". This might be a downer."}</Text>
                                }
                                <Text>{songDetails.explicit_lyrics ? "Explicit lyrics!!! (be safe)" : "No explicit lyrics"}</Text>
                                {
                                    currentUser?.username ? (
                                        <Button m={2}>Post Song</Button>
                                    ) : (
                                        <Text m={2}><b>Join to post!</b></Text>
                                    )
                                }
                            </GridItem>
                        </Grid>
                    </div>
                }
            </Box>
        </DefaultLayout>
    );
};
export default DetailsPage;
