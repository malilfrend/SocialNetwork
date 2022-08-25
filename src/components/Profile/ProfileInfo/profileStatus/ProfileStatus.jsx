import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import statusFormSchema from "../../../formValidations/StatusFormSchema";
import classes from "./ProfileStatus.module.css";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

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
		<div className={classes.status}>
			{!editMode
				? <div>
					<span
						className={props.isOwner ? classes.status_span : null}
						onDoubleClick={props.isOwner ? activeEditMode : null}
					>
						{ ((props.isOwner && props.status) ||( props.isOwner && 'setStatus')) || props.status || '' }
					</span>
				</div>
				:<div>
					<Formik
						initialValues={{status: props.status}}
						onSubmit={(values) => {
							deactivateEditMode(values.status)
						}}
						validationSchema={statusFormSchema}
					>
						{({values, handleChange}) => (
							<Form>
								<div className={classes.status}>
									<TextField
										className={classes.statusInput}
										value={values.status}
										variant="filled"
										type={'text'}
										fullWidth
										autoFocus
										sx={{ input: { color: 'white'},
										}}
										name={'status'}
										onChange={handleChange}
										placeholder={'insert your status'}
										size="small"
									/>
									<Button color="primary" variant="contained" type="submit" size="small">
										Set status
									</Button>
									<ErrorMessage name="status" component="div"/>
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