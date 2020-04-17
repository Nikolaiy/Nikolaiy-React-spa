import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import {Route} from "react-router-dom"
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessageContainer from "./components/Messages/Message/MessageContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className="App">
            <HeaderContainer/>
            <div className="wrapper">
                <Menu state={props.state.friendPage}/>
                <div className="content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/messages' render={() => <MessageContainer/>}/>
                    <Route path='/friends' render={() => <UsersContainer />}/>
                </div>
            </div>
        </div>
    );
};

export default App;