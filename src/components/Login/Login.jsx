import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" type="login"
                       validate={[required]}
                       name="login" component={Input}/>
            </div>
            <div>
                <Field placeholder="Password" type="password"
                       validate={[required]}
                       name="password" component={Input}/>
            </div>
            <div>
                <Field name="rememberMe" component={Input} type="checkbox"/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};


const LoginRedax = reduxForm({
    form: 'login'
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <>
            <h1>LOGIN</h1>
            <LoginRedax onSubmit={onSubmit}/>
        </>
    )
};

export default Login