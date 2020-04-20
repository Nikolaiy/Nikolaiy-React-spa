import {profilePage} from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_NEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "He trusts you", likesCount: 10},
        {id: 2, message: "You are welcome", likesCount: 15},
        {id: 3, message: "You are country", likesCount: 11}
    ],
    newPostText: '',
    profile: null,
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
            return {...state, profile: action.profile}
        default:
            return state;
    }
    ;
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_NEXT, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getProfile = () => {
    return (dispatch) => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12
        }
        profilePage(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
};

export default profileReducer