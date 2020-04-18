import React from 'react';
import {connect} from "react-redux";
import {folov, setActivePage, setIsFetching, setUsers, unfolov} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/preloader";
import {activePage, getUsers} from "../../API/api";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
       getUsers().then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items)
        });
    };

    onActivePage = (pageNumber) => {
        this.props.setActivePage(pageNumber);
        this.props.setIsFetching(true);
        activePage().then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items)
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
                       unfolov={this.props.unfolov}/>
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
    }
};

export const UsersContainer = connect(mapStateToProps,
    {folov, unfolov, setUsers, setActivePage, setIsFetching,})(UsersAPIContainer);