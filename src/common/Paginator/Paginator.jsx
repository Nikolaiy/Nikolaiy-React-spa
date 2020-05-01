import React from 'react';
import s from './Paginator.module.css';


const Paginator = (props) => {

    let pageChange = Math.ceil(props.totalCount / props.pageCount);
    let pages = [];
    for (let i = 1; i <= pageChange; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pagination}>{pages.map(p => {
            return <span className={props.activePage === p && s.paginationActiv}
                         onClick={() => {props.onActivePage(p)}}>
                        {p}
                    </span>
        })
        }
        </div>
    )
};

export default Paginator;