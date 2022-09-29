import React, { useState, useEffect } from "react";
import { AUTH_LOGIN_URL, REGISTER_PAGE, TODO_PATH } from "../../path/path";
import { Link, useNavigate } from "react-router-dom";
import {
	autoValidateUsernameWhenInputChange,
	autoValidatePasswordWhenInputChange,
} from "../../validate/validate";
import { api } from "../../api/axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Instruction from "../Instruction/Instruction";

import "./Login.css";

export default function LoginForm() {
	const [username, setUsername] = useState();
	const [validUsername, setValidUsername] = useState(false);
	const [usernameFocus, setUsernameFocus] = useState(false);

	const [password, setPassword] = useState();
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [errMsg, setErrMsg] = useState();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		autoValidateUsernameWhenInputChange(username, setValidUsername);

		// Whenever dependencies change, errorMessage will be cleared
		setErrMsg("");
	}, [username]);

	useEffect(() => {
		autoValidatePasswordWhenInputChange(password, setValidPassword);

		// Whenever dependencies change, errorMessage will be cleared
		setErrMsg("");
	}, [password]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const payload = { username, password };

			setIsSubmitting(true);
			const response = await api.post(AUTH_LOGIN_URL, payload);

			const user = {
				accessToken: response.data.data.accessToken,
				username: response.data.data.username,
				id: response.data.data.id,
			};

			// Save userInfo in localStorage after sign in
			localStorage.setItem("user", JSON.stringify(user));

			alert("Sign In successfully!");
			navigate(TODO_PATH);
		} catch (err) {
			setIsSubmitting(false);
			setErrMsg(err.response.data.error.message);
		}
	};

	return (
		//  row
		<div className="form__container">
			<form className="form" onSubmit={handleSubmit}>
				<h1 className="form__title">Sign In</h1>
				<p className="form__description">Sign In and start manage your life!</p>

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
				</div>

				<button className="button button--success" disabled={isSubmitting}>
					Sign In
				</button>

				<div className="form__navigation">
					<p>Create new account?</p>
					<Link to={REGISTER_PAGE}>Sign Up</Link>
				</div>
			</form>
		</div>
	);
}
