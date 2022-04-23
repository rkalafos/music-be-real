import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {setToken} from "../actions/token-actions";
import {useDispatch} from "react-redux";

const RedirectPage = () => {
    const { hash } = useLocation();
    const params = new URLSearchParams(hash.slice(1));
    const token = params.get("access_token");
    const dispatch = useDispatch();

    setToken(dispatch, token);
    return(
        <Navigate to={"/"} />
    )
}
export default  RedirectPage;
