import * as Yup from "yup";

const statusFormSchema = Yup.object().shape({
	status: Yup.string()
		.max(300, "Must be less than 300 characters")
})

export default statusFormSchema;