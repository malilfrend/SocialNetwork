import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src="https://cdn-icons-png.flaticon.com/512/53/53104.png" alt=""/>
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    );
};

export default Post;