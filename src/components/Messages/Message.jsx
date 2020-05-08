import React from 'react';
import s from './Message.module.css'
import {NavLink} from "react-router-dom";
import { MessageReduxForm } from "./FormMessage";


const MessageItem = (props) => {
    let path = "/messages/" + props.id;
    return <li><NavLink to={path}>{props.name}</NavLink></li>
};

const MessageText = (props) => {
    return (
        <div className={s.blockMessages}>
            <div className={s.img}><img
                src="https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt=""/></div>
            <div className={s.text}>{props.text}</div>
        </div>
    )
};

const Message = (props) => {
    let MessageElement = props.state.messages.map(message => <MessageItem id={message.id} name={message.name} key={message.id}/>);
    let TextElement = props.state.text.map(text => <MessageText id={text.id} text={text.text} key={text.id}/>);


    let addNewMessage = (value) => {
        props.addMessage(value.newMessageText)
    };


    return (
        <div className={s.wraperMessages}>
            <div className={s.messages}>
                <div className={s.ava}>
                    <ul>
                        {MessageElement}
                    </ul>
                </div>
                <div className={s.texts}>
                    <div>
                        {TextElement}
                    </div>
                    <div>
                        {TextElement}
                    </div>
                </div>
            </div>
            <div className={s.form}>
                <MessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
};


export default Message;