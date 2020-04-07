import React from 'react';
import s from './Messages.module.css'
import Message from "./Message/Message";

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <Message state={props.state} dispatch={props.dispatch}/>
        </div>

    );
};


export default Messages;