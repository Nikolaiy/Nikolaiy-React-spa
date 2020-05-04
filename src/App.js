import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import {Route} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {withRouter} from "react-router";
import {compose} from "redux";
import {connect} from "react-redux";
import {getInitialized} from "./redux/app-reducer";
import Preloader from "./common/Preloader/preloader";
import LazyLoader from "./common/Suspense/Suspens";

const MessageContainer = React.lazy(() => import("./components/Messages/MessageContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


class App extends React.Component {

    componentDidMount() {
        this.props.getInitialized();
    }

    render() {

        if(!this.props.initialize){
            return <Preloader />
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <div className="wrapper">
                    <Menu state={this.props.state.friendPage}/>
                    <div className="content">
                        <Route path='/profile/:userId?' render={LazyLoader(ProfileContainer)}/>
                        <Route path='/messages' render={LazyLoader(MessageContainer)}/>
                        <Route path='/friends' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialize: state.app.initialize
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getInitialized})
)(App);