import React, { useEffect, useState } from "react";
import { AUTH_REGISTER_URL, LOGIN_PAGE } from "../../path/path";
import { Link } from "react-router-dom";
import {
	autoValidateUsernameWhenInputChange,
	autoValidatePasswordWhenInputChange,
	autoValidateConfirmPasswordWhenInputChange,
} from "../../validate/validate";
import { api } from "../../api/axios";
import NavigateToLoginPage from "./NavigateToLoginPage";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Instruction from "../Instruction/Instruction";

import "../../form.css";
import "./Register.css";

export default function RegisterForm() {
	const [username, setUsername] = useState();
	const [validUsername, setValidUsername] = useState(false);
	const [usernameFocus, setUsernameFocus] = useState(false);

	const [password, setPassword] = useState();
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [confirmPassword, setConfirmPassword] = useState();
	const [validConfirmPassword, setValidConfirmPassword] = useState(false);

	const [errMsg, setErrMsg] = useState();
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		autoValidateUsernameWhenInputChange(username, setValidUsername);
		autoValidatePasswordWhenInputChange(password, setValidPassword);
		autoValidateConfirmPasswordWhenInputChange(
			password,
			confirmPassword,
			setValidConfirmPassword
		);

		// Whenever dependencies change, errorMessage will be cleared
		setErrMsg("");
	}, [username, password, confirmPassword]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const payload = { username, password };

			await api.post(AUTH_REGISTER_URL, payload);
			setSuccess(true);
		} catch (err) {
			setErrMsg(err.response.data.error.message);
		}
	};

	return (
		<div className="form__container row">
			{success ? (
				<NavigateToLoginPage />
			) : (
				<form
					onSubmit={handleSubmit}
					className="form col-lg-4 col-md-6 col-sm-8 col-10"
				>
					<h1 className="form__title">Sign Up</h1>
					<p className="form__description">Become our new member!</p>

					<div className="form__group">
						{errMsg && <ErrorMessage errMsg={errMsg} />}

						<div className="input__field">
							<input
								className={validUsername ? "input" : "input input--error"}
								type="text"
								placeholder="Enter username"
								autoFocus
								required
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								onFocus={() => setUsernameFocus(true)}
								onBlur={() => setUsernameFocus(false)}
							/>
							{/* instruction here */}
							<Instruction
								conditionToShowInstruction={
									usernameFocus && username && !validUsername
								}
								message="Username must be a word character!"
							/>
						</div>

						<div className="input__field">
							<input
								className={validPassword ? "input" : "input input--error"}
								type="password"
								placeholder="Enter password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								onFocus={() => setPasswordFocus(true)}
								onBlur={() => setPasswordFocus(false)}
							/>
							{/* instruction here */}
							<Instruction
								conditionToShowInstruction={passwordFocus && !validPassword}
								message="Use more than 6 characters for your password!"
							/>
						</div>

						<div className="input__field">
							<input
								className={
									validConfirmPassword ? "input" : "input input--error"
								}
								type="password"
								placeholder="Confirm password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
							{/* instruction here */}
							<Instruction
								conditionToShowInstruction={
									confirmPassword && !validConfirmPassword
								}
								message="Please confirm your password!"
							/>
						</div>
					</div>

					<button className="button button--success">Sign up</button>

					<div className="form__navigation">
						<p>Already registered?</p>
						<Link to={LOGIN_PAGE}>Sign In</Link>
					</div>
				</form>
			)}
		</div>
	);
}
