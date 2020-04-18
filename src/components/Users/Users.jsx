import React from 'react';
import s from './Users.module.css';
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const Users = (props) => {

    let pageChange = Math.ceil(props.totalCount / props.pageCount);

    let pages = [];

    for (let i = 1; i <= pageChange; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.pagination}>
                {pages.map(p => {
                    return <span className={props.activePage === p && s.paginationActiv}
                                 onClick={() => {
                                     props.onActivePage(p)
                                 }}>{p}</span>
                })
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                    <div className={s.img}>
                        <NavLink to={'./profile/' + u.id}>
                            <img src={u.photoUrl != null ? u.photoUrl : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.folov
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '0bef6b48-7f84-43ca-905f-8c552e5d5a91'
                                    }
                                })
                                    .then((response) => {
                                        if (response.data.resultCode == 0) {
                                            props.unfolov(u.id)
                                        }
                                    })
                            }}>Folov</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '0bef6b48-7f84-43ca-905f-8c552e5d5a91'
                                    }
                                })
                                    .then((response) => {
                                        if (response.data.resultCode == 0) {
                                            props.folov(u.id)
                                        }
                                    })
                            }}>Upfolov</button>}
                    </div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {u.country}
                    </div>
                    <div>
                        {u.sity}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users;