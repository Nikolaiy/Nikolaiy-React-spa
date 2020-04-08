import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profile-reducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
    debugger
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text));
    };

    return (
        <Profile updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>
                     );
};


export default ProfileContainer;