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
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText= '';
        this._rerenderEntireTree(this._state);
    },
    addMessage(postMessage) {
        let newMessage = {
            id: 5,
            text: postMessage
        };
        this._state.messagePage.text.push(newMessage);
        this._rerenderEntireTree(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
}


window.store = store;
export default store