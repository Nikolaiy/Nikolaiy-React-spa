import React, {useState} from 'react';
import s from './Paginator.module.css';


const Paginator = (props, {sectionSize = 10}) => {
    debugger

    let pageChange = Math.ceil(props.totalCount / props.pageCount);
    let pages = [];
    for (let i = 1; i <= pageChange; i++) {
        pages.push(i)
    }

    let sectionCount = Math.ceil(pageChange / sectionSize);
    let [sectionNumber, setSectionNumber] = useState(1);
    let rightBorderSection = sectionNumber * sectionSize;
    let leftBorderSection = (sectionNumber - 1) * sectionSize + 1;

    return (
        <div>
            { sectionNumber > 1 && <button onClick={() => {setSectionNumber(sectionNumber - 1)}}>Prev</button>}
            <div className={s.pagination}>{pages
                .filter(p => p >= leftBorderSection && p <= rightBorderSection)
                .map(p => {
                    return <span className={props.activePage === p && s.paginationActiv}
                                 onClick={() => {
                                     props.onActivePage(p)
                                 }}>{p}
                           </span>
                })
            }
            </div>
            { sectionCount > sectionNumber && <button onClick={() => {setSectionNumber(sectionNumber + 1)}}>Next</button> }
        </div>
    )
};


export default Paginator;