import React, { useState } from "react";
import styled from "styled-components";
import { logo } from "../static";
import { Signin } from "../Components/Signin";
import { Signup } from "../Components/Signup";

export const AuthPage = () => {
	const [isSignUpForm, setIsSignUpForm] = useState(false);
	return (
		<Wrapper>
			<Logo src={logo} />
			{isSignUpForm ? (
				<Signup setIsSignUpForm={setIsSignUpForm} />
			) : (
				<Signin setIsSignUpForm={setIsSignUpForm} />
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 424px;
	height: 100vh;
	background: #1d283a;
	margin: 0 auto;
	padding: 48px;
`;
const Logo = styled.img`
	margin-bottom: 72px;
`;
