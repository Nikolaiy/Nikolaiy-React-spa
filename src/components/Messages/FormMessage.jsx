import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreater, required} from "../../utils/validators/validator";

const maxLength10 = maxLengthCreater(40);

const FormMessage = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} type='textarea'
                   validate={[required, maxLength10]}
                   name='newMessageText'/>
            <button>addMessage</button>
        </form>
    </>
};

export const MessageReduxForm = reduxForm ({
    form: 'message'
})(FormMessage);

