import * as Yup from "yup";

const statusFormSchema = Yup.object().shape({
	status: Yup.string()
		//минимальная длина - 2 символа
		.min(1, "Must be longer than 1 characters")
})

export default statusFormSchema;