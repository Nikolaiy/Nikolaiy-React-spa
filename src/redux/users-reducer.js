import { userAPI } from "../API/api";

const FOLOVING = 'FOLOVING';
const UN_FOLOVING = 'UN_FOLOVING';
const SET_USERS = 'SET_USERS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS';


const initialize = {
    users: [],
    pageCount: 5,
    totalCount: 20,
    activePage: 1,
    isFetching: false,
    followingInProgress: [],
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
        case SET_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
    ;
};

export const folovSuccess = (userId) => ({type: FOLOVING, userId});
export const unfolovSuccess = (userId) => ({type: UN_FOLOVING, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setActivePage = (newPages) => ({type: SET_ACTIVE_PAGE, newPages});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: SET_FOLLOWING_PROGRESS, isFetching, userId});

export const responseUsers = (activePage, pageCount) => {

    return (dispatch) => {

        dispatch(setActivePage(activePage));
        dispatch(setIsFetching(true));

        userAPI.getUsers(activePage, pageCount)
            .then(data => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items))
            });
    }
};
export const folov = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));
        userAPI.follow(userId).then(data => {
            if (data.resultCode == 0) { dispatch(unfolovSuccess(userId)) }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
};
export const unfolov = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));
        userAPI.unfollow(userId).then(data => {
            if (data.resultCode == 0) { dispatch(folovSuccess(userId)) }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
};

export default usersReducer;