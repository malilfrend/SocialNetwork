import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" alt=""/>
            <div>
                avatar + description
                {/*<img src="https://torange.biz/photofxnew/76/HD/lion-profile-picture-76801.jpg" alt=""/>*/}
            </div>
            <div>
                my posts
                <div>
                    new posts
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
        </div>
    );
};

export default Profile;