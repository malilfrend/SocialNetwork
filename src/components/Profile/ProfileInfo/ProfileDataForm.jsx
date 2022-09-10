import React from 'react';
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import withRouter from "../../HOC/withRouter";
import userInfoFormSchema from "../../formValidations/UserInfoFormSchema";
import Button from '@mui/material/Button';
import {Checkbox, TextareaAutosize, TextField} from "@mui/material";
import classes from './ProfileInfo.module.css'


const ProfileDataForm = ({profile, updateUserInfoThunk, onEditProfile}) => {
	const contacts = {...profile.contacts}
	const userId = profile.userId
	
	const makeObjectForRecieve = (info, userId) => {
		return {
			userId,
			lookingForAJob: info.lookingForAJob,
			lookingForAJobDescription: info.lookingForAJobDescription,
			fullName: info.fullName,
			aboutMe: info.aboutMe,
			contacts: {
				github: info.github,
				vk: info.vk,
				facebook: info.facebook,
				instagram: info.instagram,
				twitter: info.twitter,
				website: info.website,
				youtube: info.youtube,
				mainLink: info.mainLink
			}
		}
	}
	return (
		<div>
			<Formik
				initialValues={{
					lookingForAJob: profile.lookingForAJob || false,
					lookingForAJobDescription: profile.lookingForAJobDescription || '',
					fullName: profile.fullName || '',
					aboutMe: profile.aboutMe || '',
					github: contacts.github || '',
					vk: contacts.vk || '',
					facebook: contacts.facebook || '',
					instagram: contacts.instagram || '',
					twitter: contacts.twitter || '',
					website: contacts.website || '',
					youtube: contacts.youtube || '',
					mainLink: contacts.mainLink || ''
				}}
				validationSchema={userInfoFormSchema}
				onSubmit={(values, {setSubmitting, setStatus}) => {
					// console.log(makeObjectForRecieve(values, userId))
					setSubmitting(true)
					updateUserInfoThunk(makeObjectForRecieve(values, userId), setSubmitting, setStatus)
					onEditProfile(false)
				}}
			>
				{({dirty, isValid, values, handleChange, handleBlur, status}) => (
					<Form>
						<p>{status}</p>
						<div>
							<label htmlFor={'fullName'}> Your name </label>
							<TextField value={values.fullName} fullWidth id="filled-basic" variant="filled"
							           onChange={handleChange} type={'text'} name={'fullName'}/>
							<ErrorMessage name="fullName" component="div"/>
						</div>
						<div>
							<label htmlFor={'lookingForAJob'}> Finding for a job </label>
							<Checkbox name={'lookingForAJob'} checked={values.lookingForAJob} onChange={handleChange}/>
							<ErrorMessage name="lookingForAJob" component="div"/>
						</div>
						<div>
							<label htmlFor={'aboutMe'}> about me </label>
							<TextField value={values.aboutMe} fullWidth multiline id="filled-basic" variant="filled"
							           onChange={handleChange} type={'text'} name={'aboutMe'}/>
							<ErrorMessage name="aboutMe" component="div"/>
						</div>
						<div>
							<label htmlFor={'lookingForAJobDescription'}> Tell something about job what are you dream
								for </label>
							<TextField value={values.lookingForAJobDescription} fullWidth multiline id="filled-basic"
							           variant="filled" onChange={handleChange} type={'text'}
							           name={'lookingForAJobDescription'} placeholder={'write something about job'}/>
							<ErrorMessage name="lookingForAJobDescription" component="div"/>
						</div>
						<div>
							Your contacts:
							<br/>
							<div>
								<label htmlFor={'github'} className={classes.label}>Github</label>
								<TextField value={values.github} fullWidth id="filled-basic" variant="filled"
								           onChange={handleChange} type={'text'} name={'github'}/>
								<ErrorMessage name="github" component="div"/>
							</div>
							<div>
								<label htmlFor={'vk'} className={classes.label}>VK</label>
								<TextField value={values.vk} fullWidth id="filled-basic" variant="filled"
								           onChange={handleChange} type={'text'} name={'vk'}/>
								<ErrorMessage name="vk" component="div"/>
							</div>
							<div>
								<label htmlFor={'facebook'} className={classes.label}>Facebook</label>
								<TextField value={values.facebook} fullWidth id="filled-basic" variant="filled"
								           onChange={handleChange} type={'text'} name={'facebook'}/>
								<ErrorMessage name="facebook" component="div"/>
							</div>
							<div>
								<label htmlFor={'instagram'} className={classes.label}>Instagram</label>
								<TextField value={values.instagram} fullWidth id="filled-basic" variant="filled"
								           onChange={handleChange} type={'text'} name={'instagram'}/>
								<ErrorMessage name="instagram" component="div"/>
							</div>
							<div>
								<label htmlFor={'twitter'} className={classes.label}>Twitter</label>
								<TextField value={values.twitter} fullWidth id="filled-basic" variant="filled"
								           onChange={handleChange} type={'text'} name={'twitter'}/>
								<ErrorMessage name="twitter" component="div"/>
							</div>
							<div>
								<label htmlFor={'website'} className={classes.label}>Website</label>
								<TextField value={values.website} fullWidth id="filled-basic" variant="filled"
								           onChange={handleChange} type={'text'} name={'website'}/>
								<ErrorMessage name="website" component="div"/>
							</div>
							<div>
								<label htmlFor={'youtube'} className={classes.label}>Youtube</label>
								<TextField value={values.youtube} fullWidth id="filled-basic" variant="filled"
								           onChange={handleChange} type={'text'} name={'youtube'}/>
								<ErrorMessage name="youtube" component="div"/>
							</div>
							<div>
								<label htmlFor={'mainLink'} className={classes.label}>MainLink</label>
								<TextField value={values.mainLink} fullWidth id="filled-basic" variant="filled"
								           onChange={handleChange} type={'text'} name={'mainLink'}/>
								<ErrorMessage name="mainLink" component="div"/>
							</div>
						</div>
						<Button color="primary" variant="contained" fullWidth type="submit">
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default withRouter(ProfileDataForm);