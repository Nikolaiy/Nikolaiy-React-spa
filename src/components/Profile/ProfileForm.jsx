import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreater(10);

const ProfileForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit} action="">
                <Field component={Textarea} name='newPostText'
                validate={[required, maxLength10]}/>
                <button>Add</button>
            </form>
        </>
    );
};

export const ProfileReduxForm = reduxForm({
    form: 'profile'})
(ProfileForm);
