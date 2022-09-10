import React from 'react';
import classes from "./Messages.module.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const MessageForm = (props) => {
	return (
		<Formik
			initialValues={{message: ''}}
			onSubmit={(formData, {resetForm})=> {
				props.onSubmit(formData.message)
				resetForm({values: ''})
			}}
		>
			{({values, handleChange}) => (
				<Form>
					<TextField
						fullWidth
						value={values.message}
						onChange={handleChange}
						placeholder={'type your message'}
						type={'text'} name={'message'}
					/>
					<Button className={classes.send_btn} type={'submit'} >
						Send
					</Button>
				</Form>
			)}
		</Formik>
	)
};

export default MessageForm;