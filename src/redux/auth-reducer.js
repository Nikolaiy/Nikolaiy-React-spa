import {authMeApi, securityApi} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auths/SET_USER_DATA';
const SET_CAPTCHA_URL = 'aths/SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {...state, ...action.payload};
        default:
            return state
    }
};

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const captchaUrSuccess = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaUrl}
});

export const getAuthUser = () => async (dispatch) => {
    let data = await authMeApi.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true))
    }
};

export const login = (email, password, rememberMe, captcha = null) => async (dispatch) => {
    let data = await authMeApi.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {
        dispatch(getAuthUser())
    } else {
        if(data.resultCode === 10) {
            debugger
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit('login', {_error: message}))
    }
};

export const logout = () => async (dispatch) => {
    let data = await authMeApi.logout();

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityApi.securityCaptcha();
    const captchaUrl = data.data.url;

    dispatch(captchaUrSuccess(captchaUrl))
}

export default authReducer