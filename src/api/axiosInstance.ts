import axios from "axios";

export const api = axios.create({
	baseURL: "https://expa.fly.dev",
	headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
	config.headers["X-AUTH-TOKEN"] = `${localStorage.getItem("token")}`;

	return config;
});
