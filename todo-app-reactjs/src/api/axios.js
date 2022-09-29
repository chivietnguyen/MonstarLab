import axios from "axios";

export const api = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
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
