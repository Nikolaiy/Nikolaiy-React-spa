import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
});

export default connect(mapStateToProps, {getAuthUser, logout})(HeaderContainer);