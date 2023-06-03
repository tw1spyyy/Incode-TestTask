import React from "react";
import styled from "styled-components";
import { Input } from "./UI/Input";
import { PasswordInput } from "./UI/PasswordInput";
import { Button } from "./UI/Button";

interface Props {
	setIsSignUpForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Signup = ({ setIsSignUpForm }: Props) => {
	return (
		<Wrapper>
			<h2>Sign Up</h2>
			<form>
				<Input labelText="Full Name" placeholder="Example Name" />
				<Input labelText="User Name" placeholder="Example123" />
				<PasswordInput labelText="Password" placeholder="Your password" />
				<PasswordInput labelText="Confirm password" placeholder="Your password" />
				<Button>Sign Up</Button>
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
