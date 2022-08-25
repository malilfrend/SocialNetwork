import React from 'react';
import classes from './FullName.module.css'

const FullName = ({fullName}) => {
	return (
		<div className={classes.fullname}>
			<p>{fullName}</p>
		</div>
	);
};

export default FullName;