import React, { useState } from "react";
import CategoryInTodoHeader from "./CategoryInTodoHeader";

import styles from "./TodoHeader.module.css";

export default function TodoHeader() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.searchBox}>
					<input className={`input ${styles.inputSearch}`} type="text" />
					<div>
						<button className={`button ${styles.buttonSearch}`}>
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</div>
				</div>

				<div>
					<button className={`button ${styles.buttonAdd}`}>
						Add Tasks <i className="fa-solid fa-plus"></i>
					</button>
				</div>
			</div>

			<div className={styles.footer}>
				<CategoryInTodoHeader />

				<div className={styles.filterItemContainer}>
					<div className={styles.filterItem}>
						Life <i className="fa-solid fa-x"></i>
					</div>
					<div className={styles.filterItem}>
						Study <i className="fa-solid fa-x"></i>
					</div>
				</div>
			</div>
		</div>
	);
}
