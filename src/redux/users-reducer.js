const FOLOVING = 'FOLOVING';
const UN_FOLOVING = 'UN_FOLOVING';
const SET_USERS = 'SET_USERS';

const initialize = {
    users: [
        {id: 1, folov: true,
            photoUrl: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg', name: 'Nikolay', status: 'Big boss', country: 'Russia', sity: 'EKB'},
        {id: 2, folov: false,
            photoUrl: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg', name: 'Kirill', status: 'Big boss', country: 'Russia', sity: 'EKB'},
        {id: 3, folov: false,
            photoUrl: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg', name: 'Misha', status: 'Big boss', country: 'Russia', sity: 'MSK'},
        {id: 4, folov: true,
            photoUrl: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg', name: 'Natasha', status: 'Big boss', country: 'Russia', sity: 'NVS'}
    ]
};

const usersReducer = (state = initialize, action) => {
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