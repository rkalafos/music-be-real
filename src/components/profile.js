import React from 'react';
import {useParams} from "react-router-dom";


const Profile = () => {
    const { profileId } = useParams();
    return(
        <>
            <h1>Profile Page</h1>
            <h2>Profile ID: {profileId}</h2>
        </>
    )
};
export default Profile;