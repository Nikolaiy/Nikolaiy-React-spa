import React from 'react';
import {connect} from "react-redux";
import {
    folov,
    getUsers,
    setActivePage,
    setIsFetching,
    setUsers,
    unfolov
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.activePage, this.props.pageCount);
    };

    onActivePage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageCount)
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


export default compose(
    connect(mapStateToProps, {folov, unfolov, setUsers, setActivePage, setIsFetching, getUsers}),
    withAuthRedirect,
)(UsersContainer)
