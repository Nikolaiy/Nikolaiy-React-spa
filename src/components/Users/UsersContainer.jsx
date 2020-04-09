import React from 'react';
import {connect} from "react-redux";
import {folovAC, setUsersAC, unfolovAC} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);