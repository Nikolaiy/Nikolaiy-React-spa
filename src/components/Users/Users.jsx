import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.png'

const Users = (props) => {

    // let getUsers = () => {
    //     debugger
    //     axios.get('https://24pullrequests.com/users.json?callback=foo').then(response => {
    //         props.setUsers(response.product.lang)
    //     });
    // };

    let getUsers = () => {
        if (props.users.length === 0) {
            props.setUsers([
                    {
                        id: 1, folov: true,
                        photoUrl: null, name: 'Nikolay', status: 'Big boss', country: 'Russia', sity: 'EKB'
                    },
                    {
                        id: 2,
                        folov: false,
                        photoUrl: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
                        name: 'Kirill',
                        status: 'Big boss',
                        country: 'Russia',
                        sity: 'EKB'
                    },
                    {
                        id: 3,
                        folov: false,
                        photoUrl: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
                        name: 'Misha',
                        status: 'Big boss',
                        country: 'Russia',
                        sity: 'MSK'
                    },
                    {
                        id: 4,
                        folov: true,
                        photoUrl: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
                        name: 'Natasha',
                        status: 'Big boss',
                        country: 'Russia',
                        sity: 'NVS'
                    }
                ]
            )
        }
    };

    return (
        <div>
            <h1>FRIENDS</h1>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => <div key={u.id}>
                    <div className={s.img}>
                        <img src={u.photoUrl != null ? u.photoUrl : userPhoto} alt=""/>
                    </div>
                    <div>
                        {u.folov ? <button onClick={() => {
                                props.folov(u.id)
                            }}>Folov</button>
                            : <button onClick={() => {
                                props.upfolov(u.id)
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