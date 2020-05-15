import React from "react";
import {reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import s from "../../common/FormsControls/FormsControls.module.css"
import {createField} from "../../common/FormsControls/CreateField";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', [required], 'email', Input)}
            {createField('Password', [required], 'password', Input, {type: 'password'})}
            {createField(null, [], 'rememberMe', Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl} /> }
            {captchaUrl && createField('captcha', [required], 'captha', Input)}
            <div>
                <button className='btn'>Login</button>
            </div>
            {error && <div className={s.formError}>{error}</div>}
        </form>
    )
};


const LoginRedax = reduxForm({
    form: 'login'
})(LoginForm);


const Login = ({login, isAuth, captchaUrl}) => {
    debugger
    const onSubmit = (formData) => {
       login(formData.email, formData.password, formData.rememberMe, formData.captha);
    };

    if(isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginRedax onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </>
    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps, {login})(Login)