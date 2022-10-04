const USERNAME_REGEX = /^\w+$/;

const checkPassword = (password) => {
	return password.length >= 6;
};

const autoValidateUsernameWhenInputChange = (username, setValid) => {
	const checkUsernameResult = USERNAME_REGEX.test(username);
	setValid(checkUsernameResult);
};

const autoValidatePasswordWhenInputChange = (password, setValid) => {
	const checkPasswordResult = password ? checkPassword(password) : false;
	setValid(checkPasswordResult);
};

const autoValidateConfirmPasswordWhenInputChange = (
	password,
	confirmPassword,
	setValid
) => {
	const isConfirmPasswordMatchWithPassword = password === confirmPassword;
	setValid(isConfirmPasswordMatchWithPassword);
};

export {
	autoValidateUsernameWhenInputChange,
	autoValidatePasswordWhenInputChange,
	autoValidateConfirmPasswordWhenInputChange,
};
