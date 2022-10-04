import React from "react";

import styles from "./AddTodoPopUp.module.css";
import CategoryInAddTodoPopUp from "./CategoryInAddTodoPopUp";

export default function AddTodoPopUp() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<input
					className={styles.input}
					type="text"
					placeholder="Enter new task ..."
				/>

				<div className={styles.category}>
					<CategoryInAddTodoPopUp />

					<div className={styles.filterItemContainer}>
						<div className={styles.filterItem}>
							Life <i className="fa-solid fa-x"></i>
						</div>
						<div className={styles.filterItem}>
							Study <i className="fa-solid fa-x"></i>
						</div>
					</div>
				</div>

				<div className={styles.footer}>
					<button className={styles.button}>Cancel</button>
					<button className={`${styles.button} ${styles.buttonAdd}`}>
						Add task
					</button>
				</div>
			</div>
		</div>
	);
}
