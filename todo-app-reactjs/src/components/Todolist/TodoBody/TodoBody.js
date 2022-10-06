import React, { useContext, useEffect, useState } from "react";
import { api } from "../../../api/axios";
import { API_TASKS_URL, getTaskUrlWithId } from "../../../path/path";
import { TodolistContext } from "../Todolist";
import CategoryInTodoCard from "./CategoryInTodoCard";

import styles from "./TodoBody.module.css";

export default function TodoBody() {
	const [isAddTask, setIsAddTask] = useContext(TodolistContext);
	const [isDeleteTask, setIsDeleteTask] = useState(false);
	const [todolist, setTodolist] = useState();

	useEffect(() => {
		api.get(API_TASKS_URL).then((res) => {
			setTodolist(res.data);
		});
	}, [isAddTask, isDeleteTask]);

	const handleDeleteTodo = async (id) => {
		try {
			await api.delete(getTaskUrlWithId(id));
			setIsDeleteTask(!isDeleteTask);
		} catch (err) {
			alert(err.response.data.error.message);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.listItems}>
				{todolist?.data.map((todo) => (
					<div key={todo.id} className={styles.todoCard}>
						<div className={styles.cardHeader}>
							{/* <input
							className={styles.inputEdit}
							type="text"
							placeholder="Cooking"
						/> */}
							<p className={styles.cardTitle}>{todo.title}</p>
							<i className="fa-solid fa-pen"></i>
						</div>

						<div className={styles.cardBody}>
							<div className={styles.categoryField}>
								<CategoryInTodoCard />

								<div className={styles.categoryContainer}>
									{todo.categories.map((category) => (
										<div key={category.id} className={styles.category}>
											{category.name} <i className="fa-solid fa-x"></i>
										</div>
									))}
								</div>
							</div>

							<div className={styles.date}>
								<p>Start Date: {todo.createdAt}</p>
								<p>Finished Date: </p>
							</div>

							<div className={styles.cardFooter}>
								<i
									onClick={() => handleDeleteTodo(todo.id)}
									className="icon--trash fa-solid fa-trash-can"
								></i>
								<input className={styles.cardCheckbox} type="checkbox" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
