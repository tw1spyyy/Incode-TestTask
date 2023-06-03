import { configureStore } from "@reduxjs/toolkit";
import { authDataReducer } from "./auth";

export const store = configureStore({
	reducer: {
		authData: authDataReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
