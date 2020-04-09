import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import {Route} from "react-router-dom"
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessageContainer from "./components/Messages/Message/MessageContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Menu state={props.state.friendPage}/>
                <div className="content">
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    <Route path='/messages' render={() => <MessageContainer/>}/>
                    <Route path='/friends' render={() => <UsersContainer />}/>
                </div>
            </div>
        </div>
    );
};

export default App;