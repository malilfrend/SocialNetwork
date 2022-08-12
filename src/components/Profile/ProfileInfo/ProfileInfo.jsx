import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./profileStatus/ProfileStatus";
import Contacts from "./contacts/Contacts";
import LookingForJobInfo from "./lookingForJob/LokingForJobInfo";

const ProfileInfo = (props) => {
    
    const profile = props.profile
    const contacts = {...props?.profile?.contacts}
    const status = props.status
    
    if(!props.profile) {
        return <Preloader/>
    }
    
    return (
        <div className={classes.profile_info}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" alt=""/>
            <div>
                <div className={classes.avatar}>
                    <img src={profile?.photos?.large} alt="" className={classes.avatar_photo}/>
                </div>
                <div className={classes.fullname}>
                    {profile?.fullName}
                </div>
                <div className={classes.description}>
                    {profile?.aboutMe}
                </div>
                <hr/>
                <div className={classes.status}>
                    <ProfileStatus status={status}/>
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