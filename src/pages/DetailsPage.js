import { DefaultLayout } from "../layouts/DefaultLayout";
import { Heading } from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getSongById} from "../actions/song-choice-actions";

const DetailsPage = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const { songId } = useParams();
    const dispatch = useDispatch();
    const songDetails = getSongById(dispatch, songId);

  return (
    <DefaultLayout>
      {/*<Heading>{songDetails.title}</Heading>*/}
        <Heading>Teenage Dream</Heading>


        <Button>Create post</Button>
    </DefaultLayout>
  );
};
export default DetailsPage;
