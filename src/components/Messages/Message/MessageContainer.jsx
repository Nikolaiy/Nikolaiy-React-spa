import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "./../../../redux/message-reducer";
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        state: state.messagePage,
        newMessageText: state.messagePage.newMessageText,
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

const MessageContainer = connect (mapStateToProps, mapDispatchToProps)(withAuthRedirect(Message));


export default MessageContainer;