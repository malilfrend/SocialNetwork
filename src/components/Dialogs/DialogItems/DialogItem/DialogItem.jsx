import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from './../../../../assets/images/userPhoto.png';

const DialogItem = (props) => {
	return (
		<NavLink to={`/dialogs/${props.id}`}>
			<div className={classes.dialog_item}>
				<div className={classes.userPhoto}>
					<img src={userPhoto} alt=""/>
				</div>
				{props.name}
			</div>
		</NavLink>
	);
};

export default DialogItem;