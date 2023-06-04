import React, { RefObject, forwardRef } from "react";
import styled from "styled-components";
import { Ref } from "../../types/authTypes";

interface Props {
	labelText: string;
	placeholder: string;
}

export const Input = forwardRef((props: Props, ref: Ref) => {
	const { labelText, placeholder, ...other } = props;
	return (
		<Wrapper>
			{labelText}
			<InputWrapper ref={ref} type="text" placeholder={placeholder} {...other} />
		</Wrapper>
	);
});

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
