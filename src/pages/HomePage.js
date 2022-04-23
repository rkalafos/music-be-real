import React from 'react';
// import {useSelector} from "react-redux";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Box, Button, HStack} from "@chakra-ui/react";


const HomePage = () => {
    /*
    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL
    } = process.env;
    const RESPONSE_TYPE = "token";
    const token = useSelector(state => state.token.token);
     */
    return(
        <DefaultLayout>
            <Box
                p={8}
                m={8}
                w={"75%"}
                bg={"white"}
                rounded={"md"}
            >
                <HStack>
                    <Button
                        colorScheme={"red"}
                    >
                        Register
                    </Button>
                    <Button
                        colorScheme={"teal"}
                    >
                        Login
                    </Button>
                    {}
                </HStack>


            </Box>
            { /*
            !token ?
                <a href={`${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}>
                    <h1 style={{color:'white'}}> Login to Spotify </h1>
                </a> : <div>Logged in!</div>
                */
            }
        </DefaultLayout>
    )
};

export default HomePage;