import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postReducer from '../reducers/postReducer.js';
import songChoiceReducer from "../reducers/songChoiceReducer.js";
import tokenReducer from "../reducers/tokenReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        posts: postReducer,
        songChoices: songChoiceReducer,
        token: tokenReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);
export default store;