export interface ISingUpData {
	password: string;
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
