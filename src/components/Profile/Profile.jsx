import React, {useState} from 'react';
import s from './Profile.module.css'
import Post from "./Posts/Post";
import ProfileUser from "./ProfileUser/ProfileUser";
import {ProfileUserFormRedax} from "./ProfileUser/ProfileUserForm";
import user from "../../assets/images/user.png";
import Preloader from "../../common/Preloader/preloader";
import StatusUserHooks from "./StatusUserHooks";
import {ProfileReduxForm} from "./ProfileForm";

const Profile = (props) => {

    const [editMode, setEditMode] = useState(false);

    let addNewText = (value) => {
        props.addPost(value.newPostText)
    };

    let postsData = props.posts.map(text =>
        <Post message={text.message}
              count={text.likesCount} key={text.id}/>);

    const onLoadingPhoto = (e) => {
        if (e.target.files.length) {
            props.onPutPhotos(e.target.files[0])
        }
    };

    const openFormProfile = () => {
        setEditMode(true)
    };

    if (!props.profile) {
        return <Preloader/>
    };

    const onSubmitForm = (formData) => {
        props.saveProfile(formData)
    }

    return (
        <div>
            <div className={s.profileTitle}>
                <h1>Profile</h1>
            </div>
            <div className={s.profile}>
                <div className={s.user}>
                    <div>
                        <img src={props.profile.photos.large || user}/>
                    </div>
                </div>
            </div>
            <div className={s.userInfo}>
                {props.isOwner ? <input type="file" onChange={onLoadingPhoto}/> : null}
                <div><b>Name: </b>{props.profile.fullName}</div>
                {editMode ? <ProfileUserFormRedax profile={props.profile} onSubmit={onSubmitForm}/> : <ProfileUser profile={props.profile} openFormProfile={openFormProfile} isOwner={props.isOwner}/> }
                <StatusUserHooks status={props.status} updateStatus={props.updateStatus}/>
                <div className={s.form}>
                    <ProfileReduxForm onSubmit={addNewText}/>
                </div>
            </div>
            <div className={s.content}>
                {postsData}
            </div>
        </div>
    );
};


export default Profile;