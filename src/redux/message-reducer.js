const NEW_MESSAGE = 'NEW-MESSAGE';
const ADDED_NEW_MESSAGE = 'ADDED-NEW-MESSAGE';

let initialState = {
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
        ],
        newMessageText: ''
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED_NEW_MESSAGE:
            let newMessage = {
                id: 5,
                text: state.newMessageText
            };
            state.text.push(newMessage);
            state.newMessageText = '';
            return state;
        case NEW_MESSAGE:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    };
};

export const addMessageActionCreator = () => ({type: ADDED_NEW_MESSAGE});
export const onMessageChangeActionCreator = (text) => ({ type: NEW_MESSAGE, text: text });

export default messageReducer