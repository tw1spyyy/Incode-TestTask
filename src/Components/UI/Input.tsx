import React from "react";
import styled from "styled-components";

type inputType = "password" | "text";

interface Props {
	labelText: string;
	placeholder: string;
}

export const Input = ({ labelText, placeholder }: Props) => {
	return (
		<Wrapper>
			{labelText}
			<InputWrapper type="text" placeholder={placeholder} />
		</Wrapper>
	);
};

const Wrapper = styled.label`
	height: 60px;
	font-size: 14px;
	font-weight: 400;
`;

const InputWrapper = styled.input`
	background: transparent;
	margin-bottom: 24px;
	border: none;
	outline: none;
	width: 100%;
	border-bottom: 1px solid #ffffff;
	padding: 6px 0px;
	font-weight: 400;
	&::placeholder {
		color: rgba(255, 255, 255, 0.7);
	}
`;
