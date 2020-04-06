import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src="http://www.cscl.ru/images/articles/logo-cs-1-6.jpg" alt=""/>
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