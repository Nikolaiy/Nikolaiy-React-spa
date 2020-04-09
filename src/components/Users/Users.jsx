import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    return (
        <div>
            FRIENDS
            {props.users.map( u => <div key={u.id}>
                <div className={s.img}>
                    <img src={u.photoUrl} alt=""/>
                </div>
                <div>
                    {u.folov ? <button onClick={ () => { props.folov(u.id) } }>Folov</button>
                        : <button onClick={ () => { props.upfolov(u.id) } }>Upfolov</button>}
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