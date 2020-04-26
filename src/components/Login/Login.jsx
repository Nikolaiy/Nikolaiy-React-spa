import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import s from "../../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       validate={[required]}
                       name={"email"} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} type={"password"}
                       validate={[required]}
                       name={"password"} component={Input}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={Input} type={"checkbox"}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
            {props.error && <div className={s.formError}>{props.error}</div>}
        </form>
    )
};


const LoginRedax = reduxForm({
    form: 'login'
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginRedax onSubmit={onSubmit}/>
        </>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {login})(Login)