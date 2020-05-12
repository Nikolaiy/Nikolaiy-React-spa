import React from 'react';
import s from "../Profile.module.css";
import {createField} from "../../../common/FormsControls/CreateField";
import {required} from "../../../utils/validators/validator";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileUserForm = (props) => {

    debugger
    const handleSubmit = (profile) => {
        console.log(profile)
    }

    debugger

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>Save</button>
                <div><b>About Me: </b>{createField("About Me", [required], 'AboutMe', Input)}</div>
                <div><b>Looking Job: </b>{createField("Looking Job", [required], 'LookJobDesc', Input, {type: 'checkbox'})}</div>
                <div><b>Looking Job: </b>{createField(null, null, null, Textarea)}</div>

                <div><b>Contact: </b>{Object.keys(props.profile.contacts).map((el) => {
                    return <div key={el} className={s.contactsForm}>
                        <span className={s.formContact}>{el}:</span> <input type="text" placeholder={el} name={el}/>
                    </div>
                })}
                </div>
            </form>
        </>
    )
};

const ProfileUserFormRedax = reduxForm({
    form: 'profileInfo'
})(ProfileUserForm);

export default ProfileUserFormRedax;