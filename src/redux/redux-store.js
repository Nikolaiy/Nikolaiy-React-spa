import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";
import friendReducer from "./friend-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    friendPage: friendReducer
});

let store = createStore(redusers);

export default store;