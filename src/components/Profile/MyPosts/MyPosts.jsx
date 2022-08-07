import React from 'react';
import classes from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={classes.myPosts}>
            my posts
            <div>
                <input type="text"/>
                <button>Add new posts</button>
            </div>
            <div className={classes.posts}>
                <div className={classes.post}>
                    post1
                </div>
                <div className={classes.post}>
                    post2
                </div>
                <div className={classes.post}>
                    post3
                </div>
            </div>
        </div>
    );
};

export default MyPosts;