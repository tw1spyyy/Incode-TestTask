import { api } from "../../../api/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	ISignInData,
	ISignInResponse,
	ISignUpResponse,
	ISingUpData,
} from "../../../types/authTypes";

export const signUp = createAsyncThunk<ISignUpResponse, ISingUpData>(
	"auth/signUp",
	async (signUpData, thunkAPI) => {
		try {
			const response = await api({
				method: "POST",
				url: `/auth/register`,
				data: signUpData,
			});

			return response.data;
		} catch (e: any) {
			console.log(e);

			return thunkAPI.rejectWithValue(e);
		}
	}
);

export const signIn = createAsyncThunk<ISignInResponse, ISignInData, { rejectValue?: unknown }>(
	"auth/signIn",
	async (signInData, thunkAPI) => {
		try {
			const response = await api({
				method: "POST",
				url: `/auth/login`,
				data: signInData,
			});

			return response.data;
		} catch (e: any) {
			console.log(e);

			return thunkAPI.rejectWithValue(e);
		}
	}
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
	try {
		return await api<void>({
			method: "GET",
			url: `/auth/logout`,
		});
	} catch (e: any) {
		console.log(e);
		return thunkAPI.rejectWithValue(e);
	}
});
