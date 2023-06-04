import { RefObject } from "react";

export interface ISingUpData {
	password: string;
	repeatPassword?: string;
	username: string;
	displayName: string;
}

export interface ISignUpResponse {
	id: number;
	username: string;
	displayName: string;
	admin: boolean;
}

export interface ISignInData {
	username: string;
	password: string;
}

export interface ISignInResponse {
	accessToken: string;
	refreshToken: string;
}

export type Ref =
	| ((instance: HTMLInputElement | null) => void)
	| RefObject<HTMLInputElement>
	| null
	| undefined;

export interface IRefreshData {
	refreshToken: string;
}
export interface IRefreshResponse {
	accessToken: string;
}
