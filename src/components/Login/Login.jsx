import React from "react";
import {reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import s from "../../common/FormsControls/FormsControls.module.css"
import {createField} from "../../common/FormsControls/CreateField";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', [required], 'email', Input)}
            {createField('Password', [required], 'password', Input, {type: 'password'})}
            {createField(null, [], 'rememberMe', Input, {type: 'checkbox'}, 'remember me')}
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


const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
       login(formData.email, formData.password, formData.rememberMe);
    };

    if(isAuth){
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