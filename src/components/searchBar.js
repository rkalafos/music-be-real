import React, {useEffect, useState} from 'react';
import {searchSongs} from "../actions/song-choice-actions";
import {useDispatch, useSelector} from "react-redux";


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const token = useSelector(state => state.token.token);
    const songChoices = useSelector(state => state.songChoices);
    const dispatch = useDispatch();

    // Updates the song choices every time the search query changes.
    useEffect(() => {
        if (searchQuery) {
            searchSongs(dispatch, searchQuery, token)
        }
    }, [dispatch, searchQuery, token]);

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }
    return(
        <>
            <form action="/" method="get" />
            <label style={{color:'white'}}>
                Search for a Song:
                <input
                    type="text"
                    id="song-search"
                    placeholder="Search for a song..."
                    name="s"
                    onChange={handleSearchChange}
                    value={searchQuery}
                />
            </label>
            <ul>
                {
                    songChoices?.songChoices?.map((song) => (
                    <li key={song.id}>{song.name}</li>
                ))}
            </ul>
        </>
    )
};
export default SearchBar;