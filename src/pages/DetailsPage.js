import {DefaultLayout} from "../layouts/DefaultLayout";
import {Box, Button, Heading, Text, useColorModeValue} from "@chakra-ui/react";
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
                        <Text>{songDetails.artist.name}</Text>
                        <img src={songDetails.artist.picture} alt={songDetails.artist.name}/>
                        <Text>{songDetails.album.title}</Text>
                        <img src={songDetails.album.cover} alt={songDetails.album.title}/>
                        <Text>{Math.floor(songDetails.duration / 60)}:{(songDetails.duration % 60).toString().padStart(2, '0')}</Text>

                        <audio controls>
                            <source src={songDetails.preview} type="audio/mpeg"/>
                            Preview the song
                        </audio>
                    </div>
                }
                <Button>Create post</Button>
            </Box>
        </DefaultLayout>
    );
};
export default DetailsPage;
