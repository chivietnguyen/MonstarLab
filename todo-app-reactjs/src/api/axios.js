import axios from "axios";

export const api = axios.create({
	baseURL: "https://www.task-manager.api.mvn-training.com",
});

api.interceptors.request.use((requestConfig) => {
	const userInfo = localStorage.getItem("user")
	if (userInfo) {
		const accessToken = JSON.parse(userInfo).accessToken;
		requestConfig.headers = {
			Authorization: `Bearer ${accessToken}`,
		};
		return requestConfig;
	}

	return requestConfig;
});
