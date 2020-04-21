import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "./../../../redux/message-reducer";
import Message from "./Message";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.messagePage,
        newMessageText: state.messagePage.newMessageText,
        isAuth: state.authReducer.isAuth,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
};

const MessageContainer = connect (mapStateToProps, mapDispatchToProps)(Message);


export default MessageContainer;