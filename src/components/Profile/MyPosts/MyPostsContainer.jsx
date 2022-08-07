import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addNewPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reducer'

const MyPosts = (props) => {
    let postsElements = props.postsData
        .map(p =>
            <Post message={p.message} likeCount={p.likeCount}/>
        )

    const newPostElement = React.useRef()

    const addNewPost = () => {
        props.dispatch(addNewPostActionCreator())
    }

    const onPostChange = () => {
        let inputText = newPostElement.current.value
        props.dispatch(onPostChangeActionCreator(inputText))
    }

    return (
        <div className={classes.myPosts}>
            <h3> My posts</h3>
            <div className={classes.new_posts}>
                <input
                    type="text"
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <br/>
                <button onClick={addNewPost}>Add new posts</button>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;