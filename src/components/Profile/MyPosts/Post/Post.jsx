import React from 'react';
import classes from "./Post.module.css";
import UserPhoto from "./../../../../assets/images/userPhoto.png"
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={props?.photo || UserPhoto} alt=""/>
            <div className={classes.postInfo}>
                <strong>{props.title}</strong>
                <br/>
                {props.body}
                <div className={classes.likesCount}>
                    <FavoriteIcon className={classes.like}/>
                    {props.likeCount}
                </div>
            </div>
        </div>
    );
};

export default Post;