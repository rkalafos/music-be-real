import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import postReducer from "../reducers/postReducer.js";
import songChoiceReducer from "../reducers/songChoiceReducer.js";
import userReducer from "../reducers/userReducer";
import currentUserReducer from "../reducers/currentUserReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    posts: postReducer,
    songChoices: songChoiceReducer,
    allUsers: userReducer,
    currentUser: currentUserReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
