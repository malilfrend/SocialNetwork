import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import ProfileStatus from "./profileStatus/ProfileStatus";
import Contacts from "./contacts/Contacts";
import LookingForJobInfo from "./lookingForJob/LokingForJobInfo";
import ProfileAvatar from "./profileAvatar/ProfileAvatar";
import ProfileDataForm from "./ProfileDataForm";
import EditIcon from '@mui/icons-material/Edit';

const ProfileInfo = (props) => {
	const [editProfile, setEditProfile] = useState(false)
	const onEditProfile = () => {
		setEditProfile(!editProfile)
	}
	
	return (
		<div className={classes.profileInfo}>
			{props.isOwner &&
				<div className={classes.editBtnBlock}>
					<EditIcon onClick={onEditProfile} className={classes.editBtn}/>
				</div>
			}
			{
				!editProfile ? <ProfileData {...props}/> :
					<ProfileDataForm
						profile={props.profile}
						onEditProfile={onEditProfile}
						updateUserInfoThunk={props.updateUserInfoThunk}
					/>
			}
		</div>
	)
}

export default ProfileInfo;

const ProfileData = (props) => {
	
	const profile = props.profile
	const contacts = {...props?.profile?.contacts}
	const status = props.status
	
	return (
		<div className={classes.profileData}>
			<div className={classes.avatarBlock}>
				<ProfileAvatar
					photo={profile?.photos?.large}
					savePhoto={props.savePhoto}
					isOwner={props.isOwner}
				/>
			</div>
			
			<div className={classes.info}>
				<div className={classes.fullNameNstatus}>
					<div className={classes.fullname}>
						{profile?.fullName}
					</div>
					<div className={classes.status}>
						<ProfileStatus
							isOwner={props.isOwner}
							status={status}
							updateUserStatusThunk={props.updateUserStatusThunk}
						/>
					</div>
				</div>
				<div className={classes.description}>
					{profile?.aboutMe}
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
	)
}
