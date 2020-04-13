import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
debugger
    return (
        <div className={s.friend} key={props.id}>
            <div>
                <img src="https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=""/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    );
};

export default Friend;