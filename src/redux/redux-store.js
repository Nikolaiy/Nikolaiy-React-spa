import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import friendReducer from "./friend-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsPage: friendReducer
});

let store = createStore(redusers);

export default store;