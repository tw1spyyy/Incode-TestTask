import React from "react";
import styled from "styled-components";

interface Props {
	children: string;
}

export const Button = ({ children }: Props) => {
	return <Wrapper type="submit">{children}</Wrapper>;
};

const Wrapper = styled.button`
	padding: 10px;
	background: #539713;
	width: 100%;
	box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14),
		0px 1px 5px rgba(0, 0, 0, 0.12);
	border: none;
	cursor: pointer;
`;
