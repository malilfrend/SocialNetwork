import React from 'react';
import classes from "./ProfileAvatar.module.css";
import userPhoto from "../../../../assets/images/userPhoto.png";

const ProfileAvatar = ({photo, isOwner, savePhoto}) => {
	const onMainPhotoSelected = (e) => {
		if(e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}
	return (
		<div>
			<div className={classes.avatar}>
				<img src={photo || userPhoto} alt={''} className={classes.avatar_photo}/>
			</div>
			<div>
				{isOwner && <input type={'file'} className={classes.input_photo} onChange={onMainPhotoSelected}/>}
			</div>
		</div>
	)
}

export default ProfileAvatar;