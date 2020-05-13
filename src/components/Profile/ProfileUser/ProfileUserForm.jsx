import React from 'react';
import s from "../Profile.module.css";
import {createField} from "../../../common/FormsControls/CreateField";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileUserForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <button>Save</button>
            <div><b>Full Name: </b>{createField("Full Name", [], 'fullName', Input)}</div>
            <div><b>About Me: </b>{createField("About Me", [], 'aboutMe', Input)}</div>
            <div><b>Looking Job: </b>{createField("Looking Job", [], 'lookingForAJob', Input, {type: 'checkbox'})}
            </div>
            <div><b>My professional skills: </b>{createField("Looking Job Desc", [], 'lookingForAJobDescription', Textarea)}</div>

            <div><b>Contact: </b>{Object.keys(props.profile.contacts).map((el) => {
                return <div key={el} className={s.contactsForm}>
                    <span className={s.formContact}>{el}:</span> <input type="text" placeholder={el} name={el}/>
                </div>
            })}
            </div>
        </form>
    )
};

export const ProfileUserFormRedax = reduxForm({
    form: 'profileInfo'
})(ProfileUserForm);

