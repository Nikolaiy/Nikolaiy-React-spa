import React from 'react';
import s from './Profile.module.css'
import Post from "./Posts/Post";

const Profile = (props) => {

    let postsData = props.posts.map(text =>
        <Post message={text.message}
              count={text.likesCount}/>)

    let addPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = addPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.profile}>
            <div className={s.bg}>
                <img
                    src="https://st3.depositphotos.com/10654668/15053/i/1600/depositphotos_150535932-stock-photo-one-yellow-tulip.jpg"
                    alt=""/>
            </div>
            <div className={s.profileTitle}>
                <h1>Profile</h1>
            </div>
            <div className={s.form}>
                <form action="">
                    <textarea onChange={onPostChange}
                              ref={addPostElement} type="text"
                              value={props.newPostText}/>
                </form>
                <button onClick={addPost}>Add</button>
            </div>
            <div className={s.content}>
                {postsData}
            </div>
        </div>
    );
};


export default Profile;