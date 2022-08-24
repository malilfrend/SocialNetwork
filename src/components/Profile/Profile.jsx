import React from 'react';
import classes from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateUserInfoThunk} from "../../redux/profile-reducer";

const Profile = (props) => {
    
    return (
        <div className={classes.content}>
            <div className={classes.profileInfoContainer}>
                <ProfileInfo
                    isOwner={props.isOwner}
                    profile={props.profile}
                    status={props.status}
                    updateUserStatusThunk={props.updateUserStatusThunk}
                    savePhoto={props.saveUserPhoto}
                    updateUserInfoThunk={props.updateUserInfoThunk}
                />
            </div>
            <div className={classes.postsContainer}>
                <MyPostsContainer/>
            </div>
        </div>
    );
};

export default Profile;