import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import statusFormSchema from "../../../formValidations/StatusFormSchema";
import classes from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false)
	
	const activeEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = (status) => {
		setEditMode(false)
		props.updateUserStatusThunk(status)
	}
	return (
		<div>
			{!editMode
				? <div>
					<span onDoubleClick={activeEditMode}>{props.status || 'No status here'}</span>
				</div>
				: <div>
					<Formik
						initialValues={{status: props.status}}
						onSubmit={(values) => {
							deactivateEditMode(values.status)
						}}
						validate={values => {
							const errors = {};
							if (!values.status) {
								errors.status = 'Must be more than 1 symbol';
							}
							return errors;
						}}
						validationSchema={statusFormSchema}
					>
						{() => (
							<Form>
								<div className={classes.status}>
									<Field
										type={'text'}
										name={'status'}
										placeholder={'insert your status'}
										autoFocus={true}
										component={'textarea'}
									/>
									<ErrorMessage name="status" component="div"/>
									<button type={'submit'}>Set status</button>
								</div>
							</Form>
						)
						}
					</Formik>
				</div>
			}
		</div>
	)
}

export default ProfileStatus;