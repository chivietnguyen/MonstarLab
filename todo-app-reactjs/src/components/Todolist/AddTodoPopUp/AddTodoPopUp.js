import React, { useContext, useEffect, useState } from "react";
import { API_CATEGORIES_URL, API_TASKS_URL } from "../../../path/path";
import { api } from "../../../api/axios";

import CategoryInAddTodoPopUp from "./CategoryInAddTodoPopUp";
import { TodolistContext } from "../Todolist";
import {
	getCategoryIdsArr,
	handleDeleteCategories,
} from "../../../helper/helper";

import styles from "./AddTodoPopUp.module.css";

export const CategoriesContext = React.createContext();

export default function AddTodoPopUp() {
	const [showAddTodoPopUp, setShowAddTodoPopUp, isAddTask, setIsAddTask] =
		useContext(TodolistContext);
	const [categories, setCategories] = useState([]);
	const [categoriesSelected, setCategoriesSelected] = useState([]);
	const [task, setTask] = useState();

	useEffect(() => {
		api.get(API_CATEGORIES_URL).then((res) => {
			setCategories(res.data.data);
		});
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const payload = {
			title: task,
			categoryIds: getCategoryIdsArr(categoriesSelected),
		};

		try {
			const response = await api.post(API_TASKS_URL, payload);
			console.log(response);
			setIsAddTask(true);
			// Refresh and hide AddTodoPopUp here
			setTask();
			setCategoriesSelected([]);
			setShowAddTodoPopUp(false);
		} catch (err) {
			console(err);
		}
	};

	return (
		<>
			{showAddTodoPopUp && (
				<div className={styles.wrapper}>
					<form className={styles.container} onSubmit={handleSubmit}>
						<input
							required
							className={styles.input}
							type="text"
							placeholder="Enter new task ..."
							onChange={(e) => setTask(e.target.value)}
						/>

						<div className={styles.category}>
							<CategoriesContext.Provider
								value={[categories, categoriesSelected, setCategoriesSelected]}
							>
								<CategoryInAddTodoPopUp />
							</CategoriesContext.Provider>

							<div className={styles.filterItemContainer}>
								{categoriesSelected.map((item) => (
									<div
										key={item.id}
										className={styles.filterItem}
										onClick={() =>
											handleDeleteCategories(
												item.id,
												categoriesSelected,
												setCategoriesSelected
											)
										}
									>
										{item.name} <i className="fa-solid fa-x"></i>
									</div>
								))}
							</div>
						</div>

						<div className={styles.footer}>
							<button
								onClick={() => setShowAddTodoPopUp(false)}
								className={styles.button}
								type="button"
							>
								Cancel
							</button>
							<button
								className={`${styles.button} ${styles.buttonAdd}`}
								type="submit"
							>
								Add task
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
}
