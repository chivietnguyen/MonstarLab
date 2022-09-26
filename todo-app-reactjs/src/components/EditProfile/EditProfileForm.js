import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
	autoValidatePasswordWhenInputChange,
	autoValidateUsernameWhenInputChange,
} from "../../validate/validate";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Instruction from "../Instruction/Instruction";
import { api } from "../../api/axios";
import { getUserUrlWithId, LOGIN_PAGE } from "../../path/path";

import "../../form.css";
import "./EditProfileForm.css";
import { UserInfoContext } from "../../App";

export default function EditProfileForm() {
	const [newUsername, setNewUsername] = useState();
	const [validNewUsername, setValidNewUsername] = useState(false);
	const [newUsernameFocus, setNewUsernameFocus] = useState(false);

	const [newPassword, setNewPassword] = useState();
	const [validNewPassword, setValidNewPassword] = useState(false);
	const [newPasswordFocus, setNewPasswordFocus] = useState(false);

	const [errMsg, setErrMsg] = useState();
	const [isSubmitting, setIsSubmitting] = useState(false)
	const navigate = useNavigate();

	const userInfo = useContext(UserInfoContext)

	useEffect(() => {
		autoValidateUsernameWhenInputChange(newUsername, setValidNewUsername);
		autoValidatePasswordWhenInputChange(newPassword, setValidNewPassword);

		// Whenever dependencies change, errorMessage will be cleared
		setErrMsg("");
	}, [newUsername, newPassword]);

	const handleSubmit = async (e) => {
		
		e.preventDefault();

		try {
			const userId = JSON.parse(userInfo())?.id || undefined;
			const payload = { username: newUsername, newPassword };

			setIsSubmitting(true)
			await api.patch(getUserUrlWithId(userId), payload);

			localStorage.clear()
			alert("Edit profile successfully!")
			navigate(LOGIN_PAGE);
		} catch (err) {
			setIsSubmitting(false)
			setErrMsg(err.response.data.error.message)
		}
	};

	return (
		<div className="form__container row">
			<form
				onSubmit={handleSubmit}
				className="form col-lg-4 col-md-6 col-sm-8 col-10"
			>
				<h1 className="form__title">Edit Profile</h1>
				<p className="form__description">Feel free to edit your profile!</p>

				<div className="form__group">
					{errMsg && <ErrorMessage errMsg={errMsg} />}
					<div className="input__field">
						<input
							className={validNewUsername ? "input" : "input input--error"}
							type="text"
							placeholder="Enter new username"
							autoFocus
							required
							value={newUsername}
							onChange={(e) => setNewUsername(e.target.value)}
							onFocus={() => setNewUsernameFocus(true)}
							onBlur={() => setNewUsernameFocus(false)}
						/>
						{/* instruction here */}
						<Instruction
							conditionToShowInstruction={
								newUsernameFocus && newUsername && !validNewUsername
							}
							message="Username must be a word character!"
						/>
					</div>

					<div className="input__field">
						<input
							className={validNewPassword ? "input" : "input input--error"}
							type="password"
							placeholder="Enter new password"
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
							onFocus={() => setNewPasswordFocus(true)}
							onBlur={() => setNewPasswordFocus(false)}
						/>
						{/* instruction here */}
						<Instruction
							conditionToShowInstruction={newPasswordFocus && !validNewPassword}
							message="Use more than 6 characters for your password!"
						/>
					</div>
				</div>

				<button className="button button--success">Save changes</button>
			</form>
		</div>
	);
}
