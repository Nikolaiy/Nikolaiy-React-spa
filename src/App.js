import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom"
import {addMessage} from "./redux/state";
// import {addPost} from "./redux/state";


const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Menu state={props.state.friendsPage}/>
                <div className="content">
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/messages'
                           render={() => <Messages
                               state={props.state.messagePage}
                               addMessage={props.addMessage}/>}/>
                </div>
            </div>
        </div>
    );
};

export default App;