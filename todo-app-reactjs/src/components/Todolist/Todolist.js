import React, { useState } from "react";
import TodoBody from "./TodoBody/TodoBody";
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoFooter from "./TodoFooter/TodoFooter";
import AddTodoPopUp from "./AddTodoPopUp/AddTodoPopUp";

import styles from "./Todolist.module.css";

export const TodolistContext = React.createContext();

export default function Todolist() {
	const [showAddTodoPopUp, setShowAddTodoPopUp] = useState(false);
	const [isAddTask, setIsAddTask] = useState(false);

	return (
		<div className={styles.container}>
			<TodolistContext.Provider
				value={[showAddTodoPopUp, setShowAddTodoPopUp, isAddTask, setIsAddTask]}
			>
				<TodoHeader />

				<AddTodoPopUp />
				<TodoBody />
			</TodolistContext.Provider>

			<TodoFooter />
		</div>
	);
}
