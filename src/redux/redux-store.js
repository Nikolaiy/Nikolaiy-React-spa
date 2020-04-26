import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";
import friendReducer from "./friend-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    friendPage: friendReducer,
    authReducer : authReducer,
    form: formReducer,
    app: appReducer,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;