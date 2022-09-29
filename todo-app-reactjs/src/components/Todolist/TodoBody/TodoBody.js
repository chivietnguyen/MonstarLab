import React from "react";

import styles from "./TodoBody.module.css";

export default function TodoBody() {
	return (
		<div className={styles.container}>
			<div className={styles.listItem}>
				<div className={styles.todoHeader}>
					{/* <input
						className={`input ${styles.inputEdit}`}
						placeholder="Cooking"
						autoFocus
					/> */}
					<p className={styles.todoTitle}>Cooking</p>
					<i className="icon--edit fa-solid fa-pen"></i>
				</div>

				<div className={styles.todoBody}>
					<div className={styles.category}>
						<select className={styles.categorySelect}>
							<option value="">Category</option>
							<option value="">Life</option>
							<option value="">Study</option>
							<option value="">Work</option>
						</select>

						<div className={styles.categoriesSelected}>
							<div className={styles.selection}>
								Life
								<i className="icon--x fa-solid fa-x"></i>
							</div>
							<div className={styles.selection}>
								Study
								<i className="icon--x fa-solid fa-x"></i>
							</div>
							<div className={styles.selection}>
								Work
								<i className="icon--x fa-solid fa-x"></i>
							</div>
						</div>
					</div>

					<div className={styles.date}>Start date: </div>
					<div className={styles.date}>Finished date: </div>
				</div>

				<div className={styles.todoFooter}>
					<i className="icon--trash fa-solid fa-trash-can"></i>
					<input className={styles.todoFooterCheckbox} type="checkbox" />
				</div>
			</div>

			<div className={styles.listItem}>
				<div className={styles.todoHeader}>
					{/* <input
						className={`input ${styles.inputEdit}`}
						placeholder="Cooking"
						autoFocus
					/> */}
					<p className={styles.todoTitle}>Cooking</p>
					<i className="icon--edit fa-solid fa-pen"></i>
				</div>

				<div className={styles.todoBody}>
					<div className={styles.category}>
						<select className={styles.categorySelect}>
							<option value="">Category</option>
							<option value="">Life</option>
							<option value="">Study</option>
							<option value="">Work</option>
						</select>

						<div className={styles.categoriesSelected}>
							<div className={styles.selection}>
								Life
								<i className="icon--x fa-solid fa-x"></i>
							</div>
							<div className={styles.selection}>
								Study
								<i className="icon--x fa-solid fa-x"></i>
							</div>
							<div className={styles.selection}>
								Work
								<i className="icon--x fa-solid fa-x"></i>
							</div>
						</div>
					</div>

					<div className={styles.date}>Start date: </div>
					<div className={styles.date}>Finished date: </div>
				</div>

				<div className={styles.todoFooter}>
					<i className="icon--trash fa-solid fa-trash-can"></i>
					<input className={styles.todoFooterCheckbox} type="checkbox" />
				</div>
			</div>

			<div className={styles.listItem}>
				<div className={styles.todoHeader}>
					{/* <input
						className={`input ${styles.inputEdit}`}
						placeholder="Cooking"
						autoFocus
					/> */}
					<p className={styles.todoTitle}>Cooking</p>
					<i className="icon--edit fa-solid fa-pen"></i>
				</div>

				<div className={styles.todoBody}>
					<div className={styles.category}>
						<select className={styles.categorySelect}>
							<option value="">Category</option>
							<option value="">Life</option>
							<option value="">Study</option>
							<option value="">Work</option>
						</select>

						<div className={styles.categoriesSelected}>
							<div className={styles.selection}>
								Life
								<i className="icon--x fa-solid fa-x"></i>
							</div>
							<div className={styles.selection}>
								Study
								<i className="icon--x fa-solid fa-x"></i>
							</div>
							<div className={styles.selection}>
								Work
								<i className="icon--x fa-solid fa-x"></i>
							</div>
						</div>
					</div>

					<div className={styles.date}>Start date: </div>
					<div className={styles.date}>Finished date: </div>
				</div>

				<div className={styles.todoFooter}>
					<i className="icon--trash fa-solid fa-trash-can"></i>
					<input className={styles.todoFooterCheckbox} type="checkbox" />
				</div>
			</div>
		</div>
	);
}
