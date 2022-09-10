import React, {useState} from 'react';
import classes from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateUserInfoThunk} from "../../redux/profile-reducer";

const Profile = (props) => {
    const [editProfile, setEditProfile] = useState(false)
    const onEditProfile = () => {
        setEditProfile(!editProfile)
    }
    return (
        <div className={classes.content}>
                <ProfileInfo
                    isOwner={props.isOwner}
                    profile={props.profile}
                    editProfile={editProfile}
                    onEditProfile={onEditProfile}
                    status={props.status}
                    updateUserStatusThunk={props.updateUserStatusThunk}
                    savePhoto={props.saveUserPhoto}
                    updateUserInfoThunk={props.updateUserInfoThunk}
                />
                <MyPostsContainer editProfile={editProfile}/>
        </div>
    );
};

export default Profile;