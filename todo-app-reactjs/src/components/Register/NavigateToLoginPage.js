import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_PAGE } from "../../path/path";

import "../../form.css";
import "./Register.css";

export default function NavigateToLoginPage() {
	return (
		<form className="form col-lg-4 col-md-6 col-sm-8 col-10">
			<h1>Success!</h1>
			<p>
				<Link to={LOGIN_PAGE}>Sign In</Link>
			</p>
		</form>
	);
}
