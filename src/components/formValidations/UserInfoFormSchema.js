import * as Yup from 'yup'

const re = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm

const userInfoFormSchema = Yup.object().shape({
	lookingForAJob: Yup.string().required('This field is required'),
	lookingForAJobDescription: Yup.string().required('This field is required'),
	fullName: Yup.string().required('This field is required'),
	aboutMe: Yup.string().required('Please tell something about yourself'),
	github: Yup.string().matches(re,'URL is not valid').required('Please enter website'),
	vk: Yup.string().matches(re,'URL is not valid').required('Please enter website'),
	facebook: Yup.string().matches(re,'URL is not valid').required('Please enter website'),
	instagram: Yup.string().matches(re,'URL is not valid').required('Please enter website'),
	twitter: Yup.string().matches(re,'URL is not valid').required('Please enter website'),
	website: Yup.string().matches(re,'URL is not valid').required('Please enter website'),
	youtube: Yup.string().matches(re,'URL is not valid').required('Please enter website'),
	mainLink: Yup.string().matches(re,'URL is not valid').required('Please enter website'),
})

export default userInfoFormSchema;