import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthPage } from "./pages/AuthPage";

export const App = () => {
	return (
		<Wrapper>
			<Routes>
				<Route path="home" element={<Home />} />
				<Route path="auth" element={<AuthPage />} />
			</Routes>
		</Wrapper>
	);
};

const Wrapper = styled.div``;
