import {profileAPI, userAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_NEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "He trusts you", likesCount: 10},
        {id: 2, message: "You are welcome", likesCount: 15},
        {id: 3, message: "You are country", likesCount: 11}
    ],
    newPostText: '',
    profile: null,
    status: 'Mig',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}]
            };
        case UPDATE_NEW_POST_NEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile };
        case SET_STATUS:
            return { ...state, status: action.status };
        default:
            return state;
    };
};

export const addPost = () => ({type: ADD_POST});
export const onPostChange = (text) => ({type: UPDATE_NEW_POST_NEXT, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => {
    return (dispatch) => {
        userAPI.profilePage(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer