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
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED_NEW_MESSAGE:
            return {
                ...state,
                text: [...state.text, { id: 5, text: action.newMessageText }]
            };
        default:
            return state;
    };
};

export const addMessage = (newMessageText) => ({type: ADDED_NEW_MESSAGE, newMessageText});

export default messageReducer