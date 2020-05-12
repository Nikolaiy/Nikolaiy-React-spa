import React from 'react';
import s from "../Profile.module.css";


const ProfileUser = (props) => {


    return (
        <>
            {props.isOwner && <button onClick={props.openFormProfile}>Edit Mode</button>}
            <div><b>Looking Job: </b>{props.profile.lookingForAJob}</div>
            <div><b>Looking Job Description: </b>{props.profile.lookingForAJobDescription}</div>
            <div><b>About Me: </b>{props.profile.aboutMe}</div>
            <div><b>Contact: </b>{Object.keys(props.profile.contacts).map((el) => {
                return <div key={el} className={s.contacts}>
                    <b>{el}: </b> {props.profile.contacts[el]}
                </div>
            })}
            </div>
        </>
    )
};

export default ProfileUser