const FOLOVING = 'FOLOVING';
const UN_FOLOVING = 'UN_FOLOVING';
const SET_USERS = 'SET_USERS';

const initialize = {
    users: [],
};

const usersReducer = (state = initialize, action) => {
    debugger
    switch (action.type) {
        case FOLOVING:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, folov: false}
                    }
                    return u;
                })
            };
        case UN_FOLOVING:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, folov: true}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
    ;
};

export const folovAC = (userId) => ({type: FOLOVING, userId});
export const unfolovAC = (userId) => ({type: UN_FOLOVING, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;