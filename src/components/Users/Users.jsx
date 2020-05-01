import React from 'react';
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";


const Users = (props) => {
    return (
        <div>
            <Paginator activePage={props.activePage}
                       onActivePage={props.onActivePage}
                       totalCount={props.totalCount}
                       pageCount={props.pageCount} />

            {props.users.map(u => <User key={u.id}
                                        user={u}
                                        followingInProgress={props.followingInProgress}
                                        folov={props.folov}
                                        unfolov={props.unfolov}/>)}

        </div>
    )
}

export default Users;