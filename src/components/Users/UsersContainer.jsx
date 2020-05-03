import React from 'react';
import {connect} from "react-redux";
import {
    folov,
    responseUsers,
    setActivePage,
    setIsFetching, setTotalUsersCounter,
    setUsers,
    unfolov
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getActivePage, getFollowingInProgress,
    getFolov,
    getIsFetching,
    getPageCount,
    getTotalCount, getUnfolov,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.responseUsers(this.props.activePage, this.props.pageCount);
    };

    onActivePage = (pageNumber) => {
        this.props.responseUsers(pageNumber, this.props.pageCount)
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
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pageCount: getPageCount(state),
        activePage: getActivePage(state),
        isFetching: getIsFetching(state),
        folov: getFolov(state),
        unfolov: getUnfolov(state),
        followingInProgress: getFollowingInProgress(state),
    }
};


export default compose(
    connect(mapStateToProps, {folov, unfolov, setUsers, setActivePage, setIsFetching, responseUsers, setTotalUsersCounter}),
    // withAuthRedirect,
)(UsersContainer)
