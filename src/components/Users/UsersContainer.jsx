import React from 'react';
import {connect} from "react-redux";
import {folovAC, setActivePageAC, setIsFetchingAC, setUsersAC, unfolovAC} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import preloader from '../../assets/images/preloader.gif'

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageCount}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items)
        });
    };

    onActivePage = (pageNumber) => {
        this.props.setActivePage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageCount}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items)
        });
    };

    render() {
        return (
            <>
                <h1>FRIENDS</h1>
                {this.props.isFetching ? <img src={preloader}/> : null}
                <Users totalCount={this.props.totalCount}
                       pageCount={this.props.pageCount}
                       activePage={this.props.activePage}
                       users={this.props.users}
                       onActivePage={this.onActivePage}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageCount: state.usersPage.pageCount,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
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
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        },
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);