export const getUsers = (state) => {
    return state.usersPage.users
};

export const getTotalCount = (state) => {
    return state.usersPage.totalCount
};

export const getPageCount = (state) => {
    return state.usersPage.pageCount
};

export const getActivePage = (state) => {
    return state.usersPage.activePage
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};

export const getFolov = (state) => {
    return state.usersPage.folov
};

export const getUnfolov = (state) => {
    return state.usersPage.unfolov
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};