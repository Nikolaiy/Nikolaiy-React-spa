import React from 'react';
import s from './Users.module.css';
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, folov, unfolov}) => {
    return (
            <div>
                    <div className={s.img}>
                        <NavLink to={'./profile/' + user.id}>
                            <img src={user.photoUrl != null ? user.photoUrl : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div> {user.folov ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {folov(user.id)}}>Folov</button>
                                   : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {unfolov(user.id)}}>Upfolov</button>}
                    </div>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                    <div>
                        {user.country}
                    </div>
                    <div>
                        {user.sity}
                    </div>
                </div>
            )};

export default User;