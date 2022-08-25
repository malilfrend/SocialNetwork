import React from 'react';
import classes from './AboutMe.module.css'

const AboutMe = ({aboutMe}) => {
	return (
		<div className={classes.aboutMe}>
			<p className={classes.text}>About me:</p>
			<p className={classes.info}>{aboutMe}</p>
		</div>
	);
};

export default AboutMe;