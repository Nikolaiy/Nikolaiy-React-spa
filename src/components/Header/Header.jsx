import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src="http://www.cscl.ru/images/articles/logo-cs-1-6.jpg" alt=""/>
            </div>
            <div>
                {props.isAuth ? <NavLink to='/login'>{props.login}</NavLink> : <NavLink to='/login'>Login</NavLink>}
            </div>
            <div className={s.search}>
                <form action="">
                    <input type="text" className={s.searchInput}/>
                    <button>
                        search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Header;