import React from 'react';
import s from './Profile.module.css'
import Post from "./Posts/Post";
import Preloader from '../../common/Preloader/preloader';
import {ProfileReduxForm} from "./ProfileForm";
import StatusUserHooks from "./StatusUserHooks";
import user from '../../assets/images/user.png'

const Profile = (props) => {
    let postsData = props.posts.map(text =>
        <Post message={text.message}
              count={text.likesCount} key={text.id}/>)

    let addNewText = (value) => {
        props.addPost(value.newPostText)
    };

    if (!props.profile) {
        return <Preloader/>
    };

    const onLoadingPhoto = (e) => {
        if (e.target.files.length) {
            props.onPutPhotos(e.target.files[0])
        }
    };

    return (
        <div className={s.profile}>
            <div className={s.profileTitle}>
                <h1>Profile</h1>
            </div>
            <div className={s.user}>
                <div>
                    <img src={props.profile.photos.large || user}/>
                </div>
                {props.isOwner ? <input type="file" onChange={onLoadingPhoto}/> : null}
                <div>
                    {props.profile.aboutMe} <br/>
                    {props.profile.fullName} <br/>

                </div>
                <StatusUserHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div className={s.form}>
                <ProfileReduxForm onSubmit={addNewText}/>
            </div>
            <div className={s.content}>
                {postsData}
            </div>
        </div>
    );
};


export default Profile;