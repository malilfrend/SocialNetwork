import React, {useState} from 'react';import {Formik, Form, Field, ErrorMessage} from "formik";import loginFormSchema from "../formValidations/LoginFormSchema";import {connect} from "react-redux";import {Navigate} from "react-router-dom";import {login} from "../../redux/auth-reducer";import {Checkbox, TextField} from "@mui/material";import classes from './Login.module.css'import Button from "@mui/material/Button";const Login = (props) => {		const [captchaInput, setCaptchaInput] = useState('')	const onChangeCaptchaInput = (e) => {		setCaptchaInput(e.target.value)	}		if (props.isAuth) {		return <Navigate replace={true} to='/profile'/>	}	return (		<div className={classes.loginPage}>			<h1 className={classes.h1}>Log in</h1>			<Formik				initialValues={{email: "", password: "", rememberMe: false}}				validateOnBlur				validate={values => {					const errors = {};					if (!values.email) {						errors.email = 'Required';					} else if (						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)					) {						errors.email = 'Invalid email address';					}					return errors;				}}				onSubmit={(values,  { setSubmitting, setStatus }) => {					props.login(values.email, values.password, values.rememberMe, setStatus, setSubmitting, captchaInput)					setSubmitting(true)				}}				validationSchema={loginFormSchema}>				{({ status, values, handleChange }) => (					<Form>						<div className={classes.loginBlock}>							<label htmlFor={'email'}> Your email</label>							<br/>							<TextField								value={values.email}								fullWidth								variant="filled"								onChange={handleChange}								type={'text'}							    name={'email'}								inputProps={{style: {fontSize: 18}}}								size="small"							/>						</div>						<ErrorMessage name="email" component="div"/>						<div className={classes.loginBlock}>							<label htmlFor={'password'}> Your password</label>							<br/>							<TextField								value={values.password}								fullWidth								variant="filled"								onChange={handleChange}								type={'password'}								name={'password'}								inputProps={{style: {fontSize: 18}}}								size="small"							/>						</div>						<ErrorMessage name="password" component="div"/>						{status}						<div className={classes.rememberMeBlock}>							<label htmlFor={'rememberMe'}> Remember me </label>							<Checkbox name={'rememberMe'} checked={values.lookingForAJob} onChange={handleChange}/>							{/*<Field type={'checkbox'} name={'rememberMe'}/>*/}													</div>						<Button color="primary" variant="contained" type="submit" className={classes.logInBtn}>							Log in						</Button>					</Form>				)}			</Formik>			{props.captcha ? <div>				<img src={props.captcha} alt=""/>				<input type="text" onChange={onChangeCaptchaInput} value={captchaInput}/>			</div> : null}		</div>	)	}let mapStateToProps = (state) => {	return {		isAuth: state.auth.isAuth,		authError: state.auth.authError,		captcha: state.auth.captcha,	}}export default connect(mapStateToProps, {login})(Login)