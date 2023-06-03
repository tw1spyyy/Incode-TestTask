import { createSlice } from "@reduxjs/toolkit";

interface IAuth {}

const initialState: IAuth = {};

const authData = createSlice({
	name: "auth/authData",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export const { reducer: authDataReducer, actions: authDataActions } = authData;
