import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export const App = () => {
	return (
		<Wrapper>
			<Routes>
				<Route path="home" element={<Home />} />
			</Routes>
		</Wrapper>
	);
};

const Wrapper = styled.div``;
