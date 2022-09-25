import React from "react";

export default function Instruction({conditionToShowInstruction, message}) {
	return (
		<div className={conditionToShowInstruction ? "instruction" : "offscreen"}>
			<p>
				<i
					className="fa-solid fa-circle-info"
					style={{ paddingRight: "5px" }}
				></i>
				{/* Use more than 6 characters for your password! */}
				{message}
			</p>
		</div>
	);
}
