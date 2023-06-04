import React, { useEffect } from "react";
import styled from "styled-components";
import { Input } from "./UI/Input";
import { useForm } from "react-hook-form";
import { PasswordInput } from "./UI/PasswordInput";
import { Button } from "./UI/Button";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { signIn, signUp } from "../store/reducers/auth/action";
import { ISingUpData } from "../types/authTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface Props {
	setIsSignUpForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Signup = ({ setIsSignUpForm }: Props) => {
	const dispatch = useAppDispatch();

	const { signUpError } = useAppSelector((state) => state.authData);

	const validationSchema = Yup.object().shape({
		username: Yup.string().required("Enter your username"),
		displayName: Yup.string().required("Enter your nickname"),
		password: Yup.string()
			.required("Enter your password")
			.min(6, "Password must be at least 6 characters"),
		repeatPassword: Yup.string()
			.required("Repeat password")
			.oneOf([Yup.ref("password")], "Passwords must match"),
	});

	const formOptions = { resolver: yupResolver(validationSchema) };
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ISingUpData>(formOptions);

	useEffect(() => {}, []);

	const onSubmit = async (data: ISingUpData) => {
		console.log(data);
		const response = await dispatch(
			signUp({ password: data.password, username: data.username, displayName: data.displayName })
		);
		if (response.meta.requestStatus === "fulfilled") {
			await dispatch(signIn({ username: data.username, password: data.password }));
		}
	};

	return (
		<Wrapper>
			<h2>Sign Up</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					errorText={errors?.username?.message}
					{...register("username")}
					labelText="Full Name"
					placeholder="Example Name"
				/>

				<Input
					errorText={errors?.displayName?.message}
					{...register("displayName")}
					labelText="User Name"
					placeholder="Example123"
				/>
				<PasswordInput
					errorText={errors?.password?.message}
					{...register("password")}
					labelText="Password"
					placeholder="Your password"
				/>
				<PasswordInput
					errorText={errors?.repeatPassword?.message}
					{...register("repeatPassword")}
					labelText="Confirm password"
					placeholder="Your password"
				/>
				<Button>Sign Up</Button>
				<ErrorWrapper>
					<p>{signUpError}</p>
				</ErrorWrapper>
			</form>
			<Switcher>
				I have an account. <span onClick={() => setIsSignUpForm(false)}>Go to Sign in</span>
			</Switcher>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	& > h2 {
		font-weight: 700;
		font-size: 56px;
		line-height: 150%;
		margin-bottom: 48px;
		text-transform: uppercase;
	}
`;

const Switcher = styled.div`
	color: #f1f2f1;
	font-size: 12px;
	margin-top: 24px;
	text-align: center;
	font-weight: 400;
	& > span {
		font-weight: 400;
		font-size: 12px;
		color: #7faaf0;
		cursor: pointer;
	}
`;
const ErrorWrapper = styled.div`
	text-align: center;
	& > p {
		font-size: 16px;
		line-height: 20px;
		margin-top: 10px;
		color: #ef6666;
		display: block;
		margin-bottom: -10px;
		width: 100%;
	}
`;
