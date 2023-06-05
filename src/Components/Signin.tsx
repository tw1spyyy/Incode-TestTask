import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Input } from "./UI/Input";
import { PasswordInput } from "./UI/PasswordInput";
import { Button } from "./UI/Button";
import { signIn } from "../store/reducers/auth/action";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignInData } from "../types/authTypes";
import { validationSchemaSignIn } from "../utils/validationChemas";

interface Props {
	setIsSignUpForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Signin = ({ setIsSignUpForm }: Props) => {
	const dispatch = useAppDispatch();

	const { signInError } = useAppSelector((state) => state.authData);

	const formOptions = { resolver: yupResolver(validationSchemaSignIn) };
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ISignInData>(formOptions);

	useEffect(() => {}, []);

	const onSubmit = (data: ISignInData) => {
		dispatch(signIn({ username: data.username, password: data.password }));
	};

	return (
		<Wrapper>
			<h2>Sign In</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					errorText={errors?.username?.message}
					{...register("username")}
					labelText="User Name"
					placeholder="Example123"
				/>
				<PasswordInput
					errorText={errors?.password?.message}
					{...register("password")}
					labelText="Password"
					placeholder="Your password"
				/>
				<Button>Sign In</Button>
				<ErrorWrapper>
					<p>{signInError}</p>
				</ErrorWrapper>
			</form>
			<Switcher>
				Don’t have account yet? <span onClick={() => setIsSignUpForm(true)}>New Account</span>
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
