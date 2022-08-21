import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./profileStatus/ProfileStatus";
import Contacts from "./contacts/Contacts";
import LookingForJobInfo from "./lookingForJob/LokingForJobInfo";
import userPhoto from "./../../../assets/images/userPhoto.png"

const ProfileInfo = (props) => {
    
    const profile = props.profile
    const contacts = {...props?.profile?.contacts}
    const status = props.status
    
    const onMainPhotoSelected = (e) => {
        // e.preventDefault()
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    
    return (
        <div className={classes.profile_info}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" alt=""/>
            <div>
                <div className={classes.avatar}>
                    <img src={profile?.photos?.large || userPhoto} alt={''} className={classes.avatar_photo}/>
                </div>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div className={classes.fullname}>
                    {profile?.fullName}
                </div>
                <div className={classes.description}>
                    {profile?.aboutMe}
                </div>
                <hr/>
                <div className={classes.status}>
                    <ProfileStatus
                        status={status}
                        updateUserStatusThunk={props.updateUserStatusThunk}
                    />
                </div>
                <hr/>
                <div className={classes.information}>
                    <LookingForJobInfo profile={profile}/>
                    <hr/>
                    <div className={classes.contacts}>
                        <Contacts contacts={contacts}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;