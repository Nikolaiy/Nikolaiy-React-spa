import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import friendReducer from "./friend-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "He trusts you", likesCount: 10},
                {id: 2, message: "You are welcome", likesCount: 15},
                {id: 3, message: "You are country", likesCount: 11}
            ],
            newPostText: ''
        },
        messagePage: {
            messages: [
                {id: 1, name: 'Kir'},
                {id: 2, name: 'Vok'},
                {id: 3, name: 'Nik'},
                {id: 4, name: 'Mish'},
                {id: 5, name: 'Nat'}
            ],
            text: [
                {id: 1, text: 'Hi'},
                {id: 2, text: 'How is your'},
                {id: 3, text: 'How are you'},
                {id: 4, text: 'Welcome'}
            ]
        },
        friendsPage: {
            friends: [
                {id: 1, name: 'Andr'},
                {id: 2, name: 'Ben'},
                {id: 3, name: 'Mih'}
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        // this._state.friendsPage = friendReducer(this._state.friendsPage, action)
        this._rerenderEntireTree(this._state)

    }
}

export default store