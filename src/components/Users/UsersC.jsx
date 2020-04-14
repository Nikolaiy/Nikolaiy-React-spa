import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageCount}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    onActivePage = (pageNumber) => {
        this.props.setActivePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageCount}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        let pageChange = Math.ceil(this.props.totalCount / this.props.pageCount);

        let pages = [];

        for (let i = 1; i <= pageChange; i++) {
            pages.push(i)
        }

        return (
            <div>
                <h1>FRIENDS</h1>

                <div>
                    {pages.map(p => {
                        return <span className={this.props.activePage === p && s.paginationActiv}
                                     onClick={() => {this.onActivePage(p)}}>{p}</span>
                    })
                    }
                </div>
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