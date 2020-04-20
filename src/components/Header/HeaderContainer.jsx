import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {authMe} from "../../API/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authMe().then(data => {
            if (data.resultCode == 0) {
                let {id, email, login} = data.data
                this.props.setUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);