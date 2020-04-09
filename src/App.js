import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom"
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessageContainer from "./components/Messages/Message/MessageContainer";


const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Menu state={props.state.friendsPage}/>
                <div className="content">
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    <Route path='/messages' render={() => <MessageContainer/>}/>
                </div>
            </div>
        </div>
    );
};

export default App;