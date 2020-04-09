import React from 'react';
import s from './Menu.module.css'
import Friends from './../Blocks/Friends/Friends'
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <div className={s.menu}>
            <div className={s.avatar}>
                <img src="https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=""/>
            </div>
            <div>
                <ul className={s.item}>
                    <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                    <li><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></li>
                    <li><NavLink to="/friends" activeClassName={s.active}>Friends</NavLink></li>
                    {/*<li><a href="#">Posts</a></li>*/}
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
            <div>
                <Friends state={props.state.friends}/>
            </div>
        </div>
    );
};

export default Menu;
