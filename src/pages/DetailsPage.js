import { DefaultLayout } from "../layouts/DefaultLayout";
import {Button, Heading, Text} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getSongById} from "../actions/song-choice-actions";
import React from "react";

const DetailsPage = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const { songId } = useParams();
    const dispatch = useDispatch();
    const songDetails = getSongById(dispatch, songId);

    const time = songDetails.duration;

  return (
    <DefaultLayout>
        {/*<Heading>{songDetails.title}</Heading>*/}
        {/*currently blank songDetails, listing information i want*/}
        <Heading>Teenage Dream</Heading>
        <Text>Katy Perry</Text>
        {/*<img src={songDetails.artist.picture} alt={songDetails.artist.name} />*/}
        <img src="https://api.deezer.com/artist/144227/image" alt="Katy Perry"/>
        <Text>Teenage Dream: The Complete Confection</Text>
        {/*<img src={songDetails.album.cover} alt={songDetails.album.title} />*/}
        <img src="https://api.deezer.com/album/1603030/image" alt="Teenage Dream: The Complete Confection"/>
        {/*<Text>{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</Text>*/}
        <Text>Length: 3:47</Text>
        <Text>release date: 2012-03-23</Text>
        {/*<audio controls>*/}
        {/*    <source src={songDetails.preview} type="audio/mpeg"/>*/}
        {/*    Preview the song*/}
        {/*</audio>*/}
        <audio controls>
            <source src="https://cdns-preview-e.dzcdn.net/stream/c-e320159d1758c4f4728a81c3f4fe6098-5.mp3" type="audio/mpeg"/>
            Preview the song
        </audio>


        <Button>Create post</Button>
    </DefaultLayout>
  );
};
export default DetailsPage;
