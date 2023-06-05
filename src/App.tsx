import React, { useEffect } from "react";
import { AppRouter } from "./Components/AppRouter";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setIsAuth, setUser } from "./store/reducers/auth";

export const App = () => {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.authData);

	useEffect(() => {
		const userFromLocalStorage = JSON.parse(localStorage.getItem("user") || "{}");

		if (!user) {
			dispatch(setUser(userFromLocalStorage));
		}

		if (localStorage.getItem("token")) {
			dispatch(setIsAuth(true));
		}
	}, [user, dispatch]);

	return <AppRouter />;
};
