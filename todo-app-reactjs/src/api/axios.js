import axios from "axios";

export const api = axios.create({
	baseURL: "https://www.task-manager.api.mvn-training.com",
});

api.interceptors.request.use((requestConfig) => {
	if (localStorage.getItem("user")) {
		const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;
		requestConfig.headers = {
			Authorization: `Bearer ${accessToken}`,
		};
		return requestConfig;
	}

	return requestConfig;
});