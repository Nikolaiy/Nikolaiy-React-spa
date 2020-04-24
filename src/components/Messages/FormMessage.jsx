import React from "react";
import {Field, reduxForm} from "redux-form";

const FormMessage = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' type='textarea' name='newMessageText'/>
            <button>addMessage</button>
        </form>
    </>
};

export const MessageReduxForm = reduxForm ({
    form: 'message'
})(FormMessage);

