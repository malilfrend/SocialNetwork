import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    
    const profile = props.profile
    const contacts = {...props?.profile?.contacts}
    
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
                    {profile.fullName}
                </div>
                <div className={classes.description}>
                    {profile?.aboutMe}
                </div>
                <hr/>
                <div className={classes.information}>
                    <div className={profile.lookingForAJob ? classes.job : classes.hide}>
                        <div className={profile.lookingForAJob ? classes.lookingForJob : classes.hide}>
                            В поисках работы
                        </div>
                        <div className={profile.lookingForAJobDescription ? classes.lookingForJobDescription : classes.hide}>
                            {profile.lookingForAJobDescription}
                        </div>
                    </div>
                    <hr/>
                    <div className={classes.contacts}>
                        <div>Contacts:</div>
                        <div className={contacts.facebook ? classes.facebook : classes.hide}>
                            {contacts?.facebook}
                        </div>
                        <div className={contacts.website ? classes.website : classes.hide}>
                            {contacts?.website}
                        </div>
                        <div className={contacts.vk ? classes.vk : classes.hide}>
                            {contacts?.vk}
                        </div>
                        <div className={contacts.twitter ? classes.twitter : classes.hide}>
                            {contacts?.twitter}
                        </div>
                        <div className={contacts.instagram ? classes.instagram : classes.hide}>
                            {contacts?.instagram}
                        </div>
                        <div className={contacts.youtube ? classes.youtube : classes.hide}>
                            {contacts?.youtube}
                        </div>
                        <div className={contacts.github ? classes.github : classes.hide}>
                            {contacts?.github}
                        </div>
                        <div className={contacts.mainLink ? classes.mainLink : classes.hide}>
                            {contacts?.mainLink}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;