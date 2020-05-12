import {profileAPI} from "../API/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_PHOTOS = 'profile/SET_PHOTOS';

let initialState = {
    posts: [
        {id: 1, message: "He trusts you", likesCount: 10},
        {id: 2, message: "You are welcome", likesCount: 15},
        {id: 3, message: "You are country", likesCount: 11}
    ],
    profile: null,
    status: 'Mig',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, likesCount: 0}]
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_PHOTOS:
            return {...state, profile: {...state.profile, photos: action.photos}};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
    ;
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setPhotos = (photos) => ({type: SET_PHOTOS, photos});

export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.profilePage(userId);

    dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);

    dispatch(setStatus(data))
};

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)

    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export const onPutPhotos = (file) => async (dispatch) => {
    let data = await profileAPI.photosLoad(file);

    if (data.resultCode === 0) {
        dispatch(setPhotos(data.data.photos))
    }
};

export const handleSubmit = (profile) => async (dispatch) => {
    let data = await profileAPI.profilInfo(profile);

    if (data.resulCode === 0) {
        // dispatch()
    }
}

export default profileReducer