import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
	email: Yup.string()
		//минимальная длина - 2 символа
		.min(2, "Must be longer than 2 characters")
		.required("Required"),
	password: Yup.string()
		.min(2, "Must be longer than 2 characters")
		.max(30, "Good password, but it's so big")
		.required("Required")
});
export default loginFormSchema;