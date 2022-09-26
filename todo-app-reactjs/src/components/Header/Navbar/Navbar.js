import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/axios";
import { UserInfoContext } from "../../../App";
import { EDIT_PROFILE_PAGE, getUserUrlWithId, LOGIN_PAGE } from "../../../path/path";

import "./Navbar.css";

export default function Navbar() {
	const userInfo = useContext(UserInfoContext)
	const username = JSON.parse(userInfo())?.username || undefined;
	const userId = JSON.parse(userInfo())?.id || undefined;

	const navigate = useNavigate();

	const handleDeleteAccount = async () => {
		try {
			await api.delete(getUserUrlWithId(userId));

			localStorage.clear();
			navigate(LOGIN_PAGE);
		} catch (err) {
			alert(err.response.data.error.message);
		}
	};

	const handleLogout = () => {
		localStorage.clear()
		navigate(LOGIN_PAGE)
	}

	const handleNavigateToEditProfile = () => {
		navigate(EDIT_PROFILE_PAGE)
	}

	return (
		<>
			{username && (
				<div className="header__navbar">
					<div className="user">
						<div className="user__avatar">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
								alt="user avatar"
							/>
						</div>
						<p className="user__name">{username}</p>

						<div className="navbar__options">
							<div className="option__container">
								<button onClick={handleNavigateToEditProfile} className="button button--option button--edit-profile">
									<i className="fa-solid fa-user-pen"></i>
									Edit Profile
								</button>
							</div>
							<div className="option__container">
								<button
									onClick={handleDeleteAccount}
									className="button button--option button--delete-account"
								>
									<i
										className="fa-solid fa-trash"
										style={{ marginRight: "15px" }}
									></i>
									Delete Account
								</button>
							</div>
						</div>
					</div>

					<button onClick={handleLogout} className="button button--logout">Logout</button>
				</div>
			)}
		</>
	);
}
