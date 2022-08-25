import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import ProfileStatus from "./profileStatus/ProfileStatus";
import Contacts from "./contacts/Contacts";
import LookingForJobInfo from "./lookingForJob/LokingForJobInfo";
import ProfileAvatar from "./profileAvatar/ProfileAvatar";
import ProfileDataForm from "./ProfileDataForm";
import EditIcon from '@mui/icons-material/Edit';
import FullName from "./fullName/FullName";
import AboutMe from "./aboutMe/AboutMe";

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
			<ProfileAvatar
				photo={profile?.photos?.large}
				savePhoto={props.savePhoto}
				isOwner={props.isOwner}
			/>
			<div className={classes.mainInfo}>
				<div className={classes.nameAndStatus}>
					<FullName fullName={profile?.fullName}/>
					<ProfileStatus
						isOwner={props.isOwner}
						status={status}
						updateUserStatusThunk={props.updateUserStatusThunk}
					/>
				</div>
				
				<AboutMe aboutMe={profile?.aboutMe}/>
				<LookingForJobInfo profile={profile}/>
				<Contacts contacts={contacts}/>
			</div>
		</div>
	)
}
