import React from 'react';
import {Formik, Form, Field} from "formik";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import classes from './MyPosts.module.css'

const MyPostsForm = (props) => {
	
	return (
		<Formik
			initialValues={{title: '', body: ''}}
			onSubmit={(formData, {resetForm}) => {
				props.onSubmit(formData.title, formData.body)
				resetForm({values: ''})
			}}>
			{( {values, handleChange}) => (
				<Form className={classes.newPostForm}>
					<TextField
						fullWidth
						type={'title'}
						value={values.title}
						placeholder={'Title of your post'}
						variant="filled"
						onChange={handleChange}
						name={'title'}
						inputProps={{style: {fontSize: 18}}}
						size="small"
						className={classes.title}
					/>
					<TextField
						fullWidth
						type={'body'}
						value={values.body}
						placeholder={'Text of your post'}
						variant="filled"
						onChange={handleChange}
						name={'body'}
						inputProps={{style: {fontSize: 18}}}
						size="small"
						className={classes.body}
					/>
					<div>
						<Button color="primary" variant="contained" type="submit" className={classes.logInBtn}>
							Post
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default MyPostsForm;