import React from "react";

import "./ErrorMessage.css";

export default function ErrorMessage({ errMsg }) {
	return (
		<div className="errmsg">
			<i
				className="icon--info fa-solid fa-circle-info"
			></i>
			{errMsg}
		</div>
	);
}
