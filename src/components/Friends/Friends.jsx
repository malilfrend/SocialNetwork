import React from 'react';
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    
    let friendsElements = props.friendsNames
        .map(n => <Friend name={n.name} avatar={n.avatar} key={n.id}/>
        )
    
    return (
        <div className={classes.friends}>
            <h3>Friends</h3>
            <div className={classes.friends_grid}>
                {friendsElements}
            </div>
        </div>
    )
    
};


export default Friends;