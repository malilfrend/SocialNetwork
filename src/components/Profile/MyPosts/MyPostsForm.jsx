import React from 'react';
import {Formik, Form, Field, ErrorMessage, useFormik} from "formik";

const MyPostsForm = (props) => {
	
	return (
		<Formik
			initialValues={{postText: ''}}
			onSubmit={(formData, {resetForm}) => {
				props.onSubmit(formData.postText)
				resetForm({values: ''})
			}}>
			{() => (
				<Form>
					<Field placeholder={'Insert your post message'} type={'text'} name={'postText'}/>
					<div>
						<button type={"submit"}>Add new posts</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default MyPostsForm;