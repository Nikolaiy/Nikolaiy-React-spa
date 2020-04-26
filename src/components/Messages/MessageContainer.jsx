import React from 'react';
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {addMessage} from "../../redux/message-reducer";

let mapStateToProps = (state) => {
    return {
        state: state.messagePage,
        newMessageText: state.messagePage.newMessageText,
    }
};

export default compose(
    connect (mapStateToProps, {addMessage}),
    withAuthRedirect
)(Message)
