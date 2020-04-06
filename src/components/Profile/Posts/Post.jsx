import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img
                    src="https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    alt=""/>
            </div>
            <div className={s.descr}>
                <div className={s.text}>
                    {props.message}
                </div>
                <div>
                    <div><span>like</span>{props.count}</div>
                </div>
            </div>
        </div>
    );
};

export default Post;