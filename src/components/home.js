import React, {useEffect, useState} from 'react';
import SearchBar from "./searchBar";


const Home = () => {
    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL
    } = process.env;
    const RESPONSE_TYPE = "token";
    const [token, setToken] = useState("");
    // Save the token from the
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return(
        <>
            <h1>Home Page</h1>
            {!token ?
                <a href={`${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}>
                Login to Spotify
                </a> : <button onClick={logout}>Logout</button>
            }
            <SearchBar/>
        </>
    )
};

export default Home;