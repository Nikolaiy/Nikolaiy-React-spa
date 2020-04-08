import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom"
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    debugger
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Menu state={props.state.friendsPage}/>
                <div className="content">
                    <Route path='/profile'
                           render={() => <ProfileContainer
                               store={props.store}/>}/>
                    <Route path='/messages'
                           render={() => <Messages
                               state={props.state.messagePage}
                               dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </div>
    );
};

export default App;