import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";
import { Home } from "../pages/Home";
import { useAppSelector } from "../hooks/redux";

export const AppRouter = () => {
	const { isAuth } = useAppSelector((state) => state.authData);

	return (
		<Wrapper>
			{isAuth ? (
				<Routes>
					<Route path="home" element={<Home />} />
					<Route path="*" element={<Navigate to="/home" />} />
				</Routes>
			) : (
				<Routes>
					<Route path="auth" element={<AuthPage />} />
					<Route path="*" element={<Navigate to="/auth" />} />
				</Routes>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div``;
