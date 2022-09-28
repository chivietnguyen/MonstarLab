import React from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoBody from "../TodoBody/TodoBody";
import TodoFooter from "../TodoFooter/TodoFooter";

import "./Todolist.css";

export default function Todolist() {
	return (
		<div className="todolist__container">
			<TodoHeader />
			<TodoBody />
			<TodoFooter />
		</div>
	);
}
