import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_PAGE } from "../../path/path";

import "./Register.css";

export default function NavigateToLoginPage() {
	return (
		<form className="form">
			<h1>Success!</h1>
			<p>
				<Link to={LOGIN_PAGE}>Sign In</Link>
			</p>
		</form>
	);
}
