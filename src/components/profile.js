import React from 'react';
import {useParams} from "react-router-dom";


const Profile = () => {
    const { profileId } = useParams();
    return(
        <>
            <h1 style={{color: 'white'}}> HEY NOW</h1>
            <h1 style={{color:'white'}}>Profile Page</h1>
            <h2 style={{color:'white'}}>Profile ID: {profileId}</h2>
        </>
    )
};
export default Profile;