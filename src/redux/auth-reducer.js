import {authMeApi} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auths/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload};
        default:
            return state
    }
};

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getAuthUser = () => async (dispatch) => {
    let data = await authMeApi.authMe();

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true))
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authMeApi.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(getAuthUser())
    } else {
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

export default authReducer