import { createSlice } from "@reduxjs/toolkit";
import { logout, refreshToken, signIn, signUp } from "./action";
import { ISignUpResponse } from "../../../types/authTypes";

interface IAuth {
	isAuth: boolean;
	isLoading: boolean;
	user: ISignUpResponse;
}

const initialState: IAuth = {
	isAuth: false,
	isLoading: false,
	user: {} as ISignUpResponse,
};

const authData = createSlice({
	name: "auth/authData",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setIsAuth: (state, action) => {
			state.isAuth = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signUp.fulfilled, (state, action) => {
				state.isAuth = true;
				// state.isLoading = false;
				state.user = action.payload;
				localStorage.setItem("user", JSON.stringify(action.payload));
			})
			.addCase(signIn.fulfilled, (state, action) => {
				localStorage.setItem("token", action.payload.accessToken);
				localStorage.setItem("refreshToken", action.payload.refreshToken);
				state.isAuth = true;
			})
			.addCase(logout.fulfilled, (state, action) => {
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				state.isAuth = false;
				state.user = {} as ISignUpResponse;
			})
			.addCase(refreshToken.fulfilled, (state, action) => {
				localStorage.setItem("token", action.payload.accessToken);
			});
	},
});

export const { reducer: authDataReducer, actions: authDataActions } = authData;

export const { setUser, setIsAuth } = authDataActions;
