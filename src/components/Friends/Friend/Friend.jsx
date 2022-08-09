import React from 'react';
import classes from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={classes.friends_grid_item}>
            <div className={classes.avatar}><img src={`${props.avatar}`} alt=""/></div>
            <div className={classes.name}>{props.name}</div>
        </div>
    );
};

export default Friend;