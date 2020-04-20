import React from 'react';
import {connect} from "react-redux";
import {
    folov,
    setActivePage,
    setIsFetching,
    setUsers,
    toggleFollowingProgress,
    unfolov
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/preloader";
import { userAPI } from "../../API/api";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        userAPI.getUsers(this.props.activePage, this.props.pageCount)
           .then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items)
        });
    };

    onActivePage = (pageNumber) => {
            this.props.setActivePage(pageNumber);
            this.props.setIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageCount)
            .then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items)
        });
    };

    render() {
        return (
            <>
                <h1>FRIENDS</h1>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalCount={this.props.totalCount}
                       pageCount={this.props.pageCount}
                       activePage={this.props.activePage}
                       users={this.props.users}
                       onActivePage={this.onActivePage}
                       folov={this.props.folov}
                       unfolov={this.props.unfolov}
                       followingInProgress={this.props.followingInProgress}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
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
        folov: state.usersPage.folov,
        unfolov: state.usersPage.unfolov,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export const UsersContainer = connect(mapStateToProps,
    {folov, unfolov, setUsers, setActivePage, setIsFetching, toggleFollowingProgress})(UsersAPIContainer);