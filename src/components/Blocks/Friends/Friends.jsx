import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    debugger

    let friendData = props.state.map( name => <Friend name={name.name}/>)

    return (
        <div className={s.friends}>
           {friendData}
        </div>
    );
};

export default Friends;