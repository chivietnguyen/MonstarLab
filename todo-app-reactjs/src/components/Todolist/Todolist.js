import React from "react";
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoBody from "./TodoBody/TodoBody";
import TodoFooter from "./TodoFooter/TodoFooter";

import styles from "./Todolist.module.css";

export default function Todolist() {
	return (
		<div className={styles.container}>
			<TodoHeader />
			<TodoBody />
			<TodoFooter />
		</div>
	);
}
