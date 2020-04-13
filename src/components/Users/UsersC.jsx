import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.png'

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        debugger
        return (
            <div>
                <h1>FRIENDS</h1>

                {this.props.users.map(u => <div key={u.id}>
                        <div className={s.img}>
                            <img src={u.photoUrl != null ? u.photoUrl : userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.folov ? <button onClick={() => {
                                    this.props.folov(u.id)
                                }}>Folov</button>
                                : <button onClick={() => {
                                    this.props.upfolov(u.id)
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
}

export default Users;