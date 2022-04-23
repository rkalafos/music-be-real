import React from 'react';
// import {useSelector} from "react-redux";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Box, Button, Flex} from "@chakra-ui/react";
import {useNavigate} from "react-router";


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
    const navigate = useNavigate();
    return(
        <DefaultLayout>
            <Flex align={"center"}>
                <Box align={"right"}>
                    <Button
                        mr={4}
                        colorScheme={"red"}
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </Button>
                    <Button
                        colorScheme={"teal"}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                </Box>
            </Flex>
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