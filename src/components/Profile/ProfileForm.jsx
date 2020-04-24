import React from 'react';
import {Field, reduxForm} from "redux-form";

const ProfileForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit} action="">
                <Field type="textarea" component='textarea' name='newPostText'/>
                <button>Add</button>
            </form>
        </>
    );
};

export const ProfileReduxForm = reduxForm({
    form: 'profile'})
(ProfileForm);
