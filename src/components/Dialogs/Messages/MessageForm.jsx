import React from 'react';
import classes from "./Messages.module.css";
import {Formik, Form, Field, ErrorMessage} from "formik";

const MessageForm = (props) => {
	return (
		<Formik
			initialValues={{message: ''}}
			onSubmit={(formData)=> {
				props.onSubmit(formData.message)
			}}
		>
			{() => (
				<Form>
					<Field placeholder={'type your message'} type={'text'} name={'message'}/>
					<button className={classes.send_btn} type={'submit'}>
						Send
					</button>
				</Form>
			)}
		</Formik>
	)
};

export default MessageForm;