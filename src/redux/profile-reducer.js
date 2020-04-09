const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_NEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, message: "He trusts you", likesCount: 10},
            {id: 2, message: "You are welcome", likesCount: 15},
            {id: 3, message: "You are country", likesCount: 11}
        ],
        newPostText: ''
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
            }
        default:
            return state;
    };
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_NEXT, text: text});

export default profileReducer