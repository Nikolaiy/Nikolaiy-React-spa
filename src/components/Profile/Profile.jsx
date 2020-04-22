import React from 'react';
import s from './Profile.module.css'
import Post from "./Posts/Post";
import Preloader from '../../common/Preloader/preloader';
import {StatusUser} from './StatusUser';

const Profile = (props) => {
    let postsData = props.posts.map(text =>
        <Post message={text.message}
              count={text.likesCount} key={text.id}/>)

    let addPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = addPostElement.current.value;
        props.onPostChange(text);
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profile}>
            <div className={s.profileTitle}>
                <h1>Profile</h1>
            </div>
            <div className={s.user}>
                <div>
                    <img src={props.profile.photos.small}/>
                </div>
                <div>
                    {props.profile.aboutMe} <br/>
                    {props.profile.fullName} <br/>

                </div>
                <StatusUser status={'Hello my friend'} />
            </div>
            <div className={s.form}>
                <form action="">
                    <textarea onChange={onPostChange}
                              ref={addPostElement} type="text"
                              value={props.newPostText}/>
                </form>
                <button onClick={addPost}>Add</button>
            </div>
            <div className={s.content}>
                {postsData}
            </div>
        </div>
    );
};


export default Profile;