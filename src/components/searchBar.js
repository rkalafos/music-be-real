import React, {useEffect, useState} from 'react';
import {searchSongs} from "../actions/song-choice-actions";
import {useDispatch, useSelector} from "react-redux";
import {toJSON} from "lodash/seq";


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const token = useSelector(state => state.token.token);
    const songChoices = useSelector(state => state.songChoices);

    const dispatch = useDispatch();
    useEffect(() => {
        if (searchQuery) {
            console.log("use effect is run!")
            searchSongs(dispatch, searchQuery, token)
        }
    }, [dispatch, searchQuery, token]);

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

    console.log(`song choices: ${toJSON(songChoices)}`);
    console.log(`song: ${songChoices?.items}`);
    return(
        <>
            <form action="/" method="get" />
            <label>
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
                    songChoices?.items?.map((song) => (
                    <li key={song.id}>{song.name}</li>
                ))}
            </ul>
        </>
    )
};
export default SearchBar;