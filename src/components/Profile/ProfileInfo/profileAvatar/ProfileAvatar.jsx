import React from 'react';
import classes from "./ProfileAvatar.module.css";
import userPhoto from "../../../../assets/images/userPhoto.png";
import Button from "@mui/material/Button";

const ProfileAvatar = ({photo, isOwner, savePhoto}) => {
	
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}
	return (
		<div className={classes.avatarSection}>
			<div className={classes.avatarBlock}>
				<img src={photo || userPhoto} alt={''} className={classes.avatarPhoto}/>
			</div>
			{isOwner &&
				<div className={classes.uploadBtn}>
					<input
						accept="image/*"
						className={classes.input}
						style={{display: 'none'}}
						id="raised-button-file"
						multiple
						type="file"
						onChange={onMainPhotoSelected}
					/>
					<label htmlFor="raised-button-file">
						<Button
							variant="outlined"
							size="small"
							component="span"
							className={classes.button}
						>
							Upload new photo
						</Button>
					</label>
				</div>
			}
		</div>
	)
}

export default ProfileAvatar;