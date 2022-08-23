import React from 'react';
import classes from './Contact.module.css'
const Contact = ({contactTitle, contactValue}) => {
	return (
		<div className={!contactValue ? classes.hide : ''}>
			<p>{contactTitle}: {contactValue}</p>
		</div>
	)
}

export default Contact;