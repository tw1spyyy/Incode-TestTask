import React, { useState } from "react";
import styled from "styled-components";

type inputType = "password" | "text";

interface Props {
	labelText: string;
	placeholder: string;
}

export const PasswordInput = ({ labelText, placeholder }: Props) => {
	const [isInputOpen, setIsInputOpen] = useState(false);

	return (
		<Wrapper>
			{labelText}
			<InputWrapper
				autoComplete="off"
				type={isInputOpen ? "text" : "password"}
				placeholder={placeholder}
			/>
			{isInputOpen ? (
				<svg
					onClick={() => setIsInputOpen(false)}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003C8.4031 4.27081 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 22.1111 14.7551 17.94 17.94Z"
						stroke="white"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<circle cx="12" cy="12" r="3" stroke="white" />
				</svg>
			) : (
				<svg
					onClick={() => setIsInputOpen(true)}
					width="24"
					height="25"
					viewBox="0 0 24 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17.94 18.44C16.2306 19.743 14.1491 20.4649 12 20.5C5 20.5 1 12.5 1 12.5C2.24389 10.1819 3.96914 8.15663 6.06 6.56003M9.9 4.74002C10.5883 4.5789 11.2931 4.49836 12 4.50003C19 4.50003 23 12.5 23 12.5C22.393 13.6356 21.6691 14.7048 20.84 15.69M14.12 14.62C13.8454 14.9148 13.5141 15.1512 13.1462 15.3151C12.7782 15.4791 12.3809 15.5673 11.9781 15.5744C11.5753 15.5815 11.1752 15.5074 10.8016 15.3565C10.4281 15.2056 10.0887 14.9811 9.80385 14.6962C9.51897 14.4113 9.29439 14.072 9.14351 13.6984C8.99262 13.3249 8.91853 12.9247 8.92563 12.5219C8.93274 12.1191 9.02091 11.7219 9.18488 11.3539C9.34884 10.9859 9.58525 10.6547 9.88 10.38"
						stroke="white"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path d="M1 1.5L23 23.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.label`
	height: 60px;
	font-size: 14px;
	font-weight: 400;
	position: relative;
	& > svg {
		position: absolute;
		cursor: pointer;
		right: 0px;
		top: 25px;
	}
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
