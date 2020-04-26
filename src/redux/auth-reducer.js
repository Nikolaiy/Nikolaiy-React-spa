import {authMeApi} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

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

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUser = () => {
    return (dispatch) => {
        authMeApi.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authMeApi.login(email, password, rememberMe).then(data => {
            if(data.resultCode === 0) {
                dispatch(getAuthUser())
            }
        })
    }
};

export const logout = () => {
    return (dispatch) => {
        authMeApi.logout().then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
};

export default authReducer