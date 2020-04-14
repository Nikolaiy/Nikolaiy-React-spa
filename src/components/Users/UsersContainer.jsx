import React from 'react';
import {connect} from "react-redux";
import {folovAC, setActivePageAC, setUsersAC, unfolovAC} from "../../redux/users-reducer";
import Users from "./Users";
import UsersC from "./UsersC";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageCount: state.usersPage.pageCount,
        activePage: state.usersPage.activePage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        folov: (userId) => {
            dispatch(folovAC(userId))
        },
        upfolov: (userId) => {
            dispatch(unfolovAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setActivePage: (pagination) => {
            dispatch(setActivePageAC(pagination))
        },
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);