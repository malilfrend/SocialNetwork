import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    
    let postsElements = props.postsData
        .map(p =>
            <Post message={p.message} likeCount={p.likeCount} key={p.id}/>
        )

    const newPostElement = React.useRef()

    const onAddPost = () => {
        props.addNewPost()
    }

    const onPostChange = () => {
        let inputText = newPostElement.current.value
        props.updateNewPostText(inputText)
    }
    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div className={classes.new_posts}>
                <input
                    type="text"
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <br/>
                <button onClick={onAddPost}>Add new posts</button>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;