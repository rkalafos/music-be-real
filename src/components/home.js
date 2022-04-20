import SearchBar from "./searchBar";
import {useSelector} from "react-redux";


const Home = () => {
    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL
    } = process.env;
    const RESPONSE_TYPE = "token";
    const token = useSelector(state => state.token.token);
    return(
        <>
            <h1>Home Page</h1>
            {!token ?
                <a href={`${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}>
                Login to Spotify
                </a> : <div>Logged in!</div>
            }
            <SearchBar/>
        </>
    )
};

export default Home;