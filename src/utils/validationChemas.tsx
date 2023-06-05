import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
	username: Yup.string().required("Enter your username"),
	displayName: Yup.string().required("Enter your nickname"),
	password: Yup.string()
		.required("Enter your password")
		.min(8, "Password must be at least 8 characters"),
	repeatPassword: Yup.string()
		.required("Repeat password")
		.oneOf([Yup.ref("password")], "Passwords must match"),
});

export const validationSchemaSignIn = Yup.object().shape({
	username: Yup.string().required("Enter your login"),
	password: Yup.string().required("Enter your password"),
});
