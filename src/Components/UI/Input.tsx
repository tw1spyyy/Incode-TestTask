import React, { RefObject, forwardRef } from "react";
import styled from "styled-components";
import { Ref } from "../../types/authTypes";

interface Props {
	labelText: string;
	placeholder: string;
	errorText: string | undefined;
}

export const Input = forwardRef((props: Props, ref: Ref) => {
	const { labelText, errorText = "", placeholder, ...other } = props;
	return (
		<Wrapper>
			{labelText}
			<InputWrapper ref={ref} type="text" placeholder={placeholder} {...other} />
			{errorText && (
				<ErrorWrapper>
					<p>{errorText}</p>
				</ErrorWrapper>
			)}
		</Wrapper>
	);
});

const Wrapper = styled.label`
	height: 60px;
	font-size: 14px;
	font-weight: 400;
	margin-bottom: 24px;
	display: block;
`;

const InputWrapper = styled.input`
	background: transparent;
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
const ErrorWrapper = styled.div`
	& > p {
		font-size: 12px;
		line-height: 16px;
		margin-top: 6px;
		color: #ef6666;
		display: block;
		margin-bottom: -10px;
		width: 100%;
	}
`;
