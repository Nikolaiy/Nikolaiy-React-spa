const FOLOVING = 'FOLOVING';
const UN_FOLOVING = 'UN_FOLOVING';
const SET_USERS = 'SET_USERS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';


const initialize = {
    users: [],
    pageCount: 5,
    totalCount: 20,
    activePage: 2,
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
            return {...state, users: action.users};
        case SET_ACTIVE_PAGE:
            return {...state, activePage:action.newPages};
        default:
            return state;
    }
    ;
};

export const folovAC = (userId) => ({type: FOLOVING, userId});
export const unfolovAC = (userId) => ({type: UN_FOLOVING, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setActivePageAC = (newPages) => ({type: SET_ACTIVE_PAGE, newPages})


export default usersReducer;