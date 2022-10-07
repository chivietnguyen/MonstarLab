import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/axios";
import { UserInfoContext } from "../../../App";
import {
	EDIT_PROFILE_PAGE,
	getUserUrlWithId,
	LOGIN_PAGE,
} from "../../../path/path";

import styles from "./Navbar.module.css";

export default function Navbar() {
	const [userInfo, setUserInfo] = useContext(UserInfoContext);
	setUserInfo(localStorage.getItem("user"));

	const username = JSON.parse(userInfo)?.username || undefined;
	const userId = JSON.parse(userInfo)?.id || undefined;

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
		localStorage.clear();
		navigate(LOGIN_PAGE);
	};

	const handleNavigateToEditProfile = () => {
		navigate(EDIT_PROFILE_PAGE);
	};

	return (
		<>
			{username && (
				<div className={styles.navbar}>
					<div className={styles.user}>
						<div className={styles.userAvatar}>
							<img
								className={styles.userAvatarImg}
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
								alt="user avatar"
							/>
						</div>
						<p className={styles.username}>{username}</p>

						<div className={styles.options}>
							<div className={styles.optionContainer}>
								<button
									onClick={handleNavigateToEditProfile}
									className={`button ${styles.buttonOption} ${styles.buttonEditProfile}`}
								>
									<i className="fa-solid fa-user-pen"></i>
									Edit Profile
								</button>
							</div>

							<div className={styles.optionContainer}>
								<button
									onClick={handleDeleteAccount}
									className={`button ${styles.buttonOption} ${styles.buttonDeleteAccount}`}
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

					<button
						onClick={handleLogout}
						className={`button ${styles.buttonLogout}`}
					>
						Logout
					</button>
				</div>
			)}
		</>
	);
}
