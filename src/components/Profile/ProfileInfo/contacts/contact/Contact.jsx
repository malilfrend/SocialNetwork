import React from 'react';
import classes from './Contact.module.css'
const Contact = ({contactTitle, contactValue}) => {
	return (
		<div className={!contactValue ? classes.hide : ''}>
			<div className={classes.contact}>
				<p className={classes.title}>{contactTitle} :</p>
				<p className={classes.value}>{contactValue}</p>
			</div>
		</div>
	)
}

export default Contact;