const LOGIN_PAGE = "/login";
const REGISTER_PAGE = "/register";
const EDIT_PROFILE_PAGE = "/edit-profile";
const TODO_PATH = "/todos";

const AUTH_REGISTER_URL = "/auth/register";
const AUTH_LOGIN_URL = "/auth/login";
const getUserUrlWithId = (id) => {
	return `/api/users/${id}`;
};

export {
	LOGIN_PAGE,
	REGISTER_PAGE,
	EDIT_PROFILE_PAGE,
	TODO_PATH,
	AUTH_LOGIN_URL,
	AUTH_REGISTER_URL,
	getUserUrlWithId,
};
