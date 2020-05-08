import React from 'react';
import './Header.css';
import avatar from '../../assets/images/avatar-social.png';
import language from '../../assets/images/flag-USA.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <div className="header__left">
                <div className="logo"><img src="" alt="Logo"/></div>
                <div className="header__chat"><i className="fa fa-comments-o"></i></div>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..."/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                </div>
            </div>
            <div className="header__right">
                <div className="header__icons">
                    <i className="fa fa-bell"></i>
                    <i className="fa fa-envelope-o"></i>
                </div>
                <div className="header__avatar">
                    <div className="header__avatar-photo">
                        <img src={avatar} alt="User"/>
                        <span>Nik</span>
                    </div>
                    {/*<div className="header__avatar-name">*/}
                    {/*    */}
                    {/*</div>*/}
                </div>
                <div className="hgeader__language-flag">
                    <img src={language} alt=""/>
                </div>
            </div>
        </div>
);
};

export default Header;