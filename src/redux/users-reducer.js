const FOLOVING = 'FOLOVING';
const UN_FOLOVING = 'UN_FOLOVING';
const SET_USERS = 'SET_USERS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialize = {
    users: [],
    pageCount: 5,
    totalCount: 20,
    activePage: 1,
    isFetching: false,
};

const usersReducer = (state = initialize, action) => {
    switch (action.type) {
        case FOLOVING:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, folov: true}
                    }
                    return u;
                })
            };
        case UN_FOLOVING:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, folov: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_ACTIVE_PAGE:
            return {...state, activePage: action.newPages};
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
    ;
};

export const folov = (userId) => ({type: FOLOVING, userId});
export const unfolov = (userId) => ({type: UN_FOLOVING, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setActivePage = (newPages) => ({type: SET_ACTIVE_PAGE, newPages});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});


export default usersReducer;