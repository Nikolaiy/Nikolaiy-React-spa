import React from 'react';
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import {addMessage} from "../../redux/state";

const Messages = (props) => {

    return (
        <div className={s.messages}>
            <Message state={props.state} addMessage={props.addMessage}/>
        </div>
    );
};


export default Messages;