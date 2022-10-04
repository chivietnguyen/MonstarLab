import React, { useState } from "react";
import TodoBody from "./TodoBody/TodoBody";
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoFooter from "./TodoFooter/TodoFooter";
import AddTodoPopUp from "./AddTodoPopUp/AddTodoPopUp";

import styles from "./Todolist.module.css";

export default function Todolist() {
	return (
		<div className={styles.container}>
			<TodoHeader />
			<TodoBody />
			<TodoFooter />
			<AddTodoPopUp />
		</div>
	);
}
