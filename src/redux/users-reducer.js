import {userAPI} from "../API/api";

const FOLOVING = 'users/FOLOVING';
const UN_FOLOVING = 'users/UN_FOLOVING';
const SET_USERS = 'users/SET_USERS';
const SET_ACTIVE_PAGE = 'users/SET_ACTIVE_PAGE';
const SET_IS_FETCHING = 'users/SET_IS_FETCHING';
const SET_FOLLOWING_PROGRESS = 'users/SET_FOLLOWING_PROGRESS';


const initialize = {
    users: [],
    pageCount: 5,
    totalCount: 20,
    activePage: 1,
    isFetching: false,
    followingInProgress: [],
};

const updateObject = ( item, itemId, objPropName, newObjProp) => {
        return item.map(u => {
            if (u[objPropName] === itemId) {
                return {...u, ...newObjProp}
            }
            return u;
        })
};

const usersReducer = (state = initialize, action) => {
    switch (action.type) {
        case FOLOVING:
            return {
                ...state,
                users: updateObject(state.users, action.userId, 'id', {folov : true})
            };
        case UN_FOLOVING:
            return {
                ...state,
                users: updateObject(state.users, action.userId, 'id', {folov : false})
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

export const responseUsers = (activePage, pageCount) => async (dispatch) => {
    dispatch(setActivePage(activePage));
    dispatch(setIsFetching(true));

    let data = await userAPI.responseUsers(activePage, pageCount);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items))
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreater) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreater(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export const folov = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), unfolovSuccess);
};

export const unfolov = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), folovSuccess);
};

export default usersReducer;