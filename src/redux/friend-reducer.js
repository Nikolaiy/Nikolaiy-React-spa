let initialState = {
        friends: [
            {id: 1, name: 'Andr'},
            {id: 2, name: 'Ben'},
            {id: 3, name: 'Mih'}
        ]
};

const friendReducer = (state = initialState, action) => {
    return state
};

export default friendReducer