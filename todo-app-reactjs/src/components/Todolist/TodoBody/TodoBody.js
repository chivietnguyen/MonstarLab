import React from "react";
import CategoryInTodoCard from "./CategoryInTodoCard";

import styles from "./TodoBody.module.css";

export default function TodoBody() {
	return (
		<div className={styles.container}>
			<div className={styles.listItems}>
				<div className={styles.todoCard}>
					<div className={styles.cardHeader}>
						{/* <input
							className={styles.inputEdit}
							type="text"
							placeholder="Cooking"
						/> */}
						<p className={styles.cardTitle}>Cooking</p>
						<i className="fa-solid fa-pen"></i>
					</div>

					<div className={styles.cardBody}>
						<div className={styles.categoryField}>
							<CategoryInTodoCard />

							<div className={styles.categoryContainer}>
								<div className={styles.category}>
									Life <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Study <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Work <i className="fa-solid fa-x"></i>
								</div>
							</div>
						</div>

						<div className={styles.date}>
							<p>Start Date: </p>
							<p>Finished Date: </p>
						</div>
					</div>

					<div className={styles.cardFooter}>
						<i className="icon--trash fa-solid fa-trash-can"></i>
						<input className={styles.cardCheckbox} type="checkbox" />
					</div>
				</div>

				<div className={styles.todoCard}>
					<div className={styles.cardHeader}>
						{/* <input
							className={styles.inputEdit}
							type="text"
							placeholder="Cooking"
						/> */}
						<p className={styles.cardTitle}>Cooking</p>
						<i className="fa-solid fa-pen"></i>
					</div>

					<div className={styles.cardBody}>
						<div className={styles.categoryField}>
							<CategoryInTodoCard />

							<div className={styles.categoryContainer}>
								<div className={styles.category}>
									Life <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Study <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Work <i className="fa-solid fa-x"></i>
								</div>
							</div>
						</div>

						<div className={styles.date}>
							<p>Start Date: </p>
							<p>Finished Date: </p>
						</div>
					</div>

					<div className={styles.cardFooter}>
						<i className="icon--trash fa-solid fa-trash-can"></i>
						<input className={styles.cardCheckbox} type="checkbox" />
					</div>
				</div>

				<div className={styles.todoCard}>
					<div className={styles.cardHeader}>
						{/* <input
							className={styles.inputEdit}
							type="text"
							placeholder="Cooking"
						/> */}
						<p className={styles.cardTitle}>Cooking</p>
						<i className="fa-solid fa-pen"></i>
					</div>

					<div className={styles.cardBody}>
						<div className={styles.categoryField}>
							<CategoryInTodoCard />

							<div className={styles.categoryContainer}>
								<div className={styles.category}>
									Life <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Study <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Work <i className="fa-solid fa-x"></i>
								</div>
							</div>
						</div>

						<div className={styles.date}>
							<p>Start Date: </p>
							<p>Finished Date: </p>
						</div>
					</div>

					<div className={styles.cardFooter}>
						<i className="icon--trash fa-solid fa-trash-can"></i>
						<input className={styles.cardCheckbox} type="checkbox" />
					</div>
				</div>

				<div className={styles.todoCard}>
					<div className={styles.cardHeader}>
						{/* <input
							className={styles.inputEdit}
							type="text"
							placeholder="Cooking"
						/> */}
						<p className={styles.cardTitle}>Cooking</p>
						<i className="fa-solid fa-pen"></i>
					</div>

					<div className={styles.cardBody}>
						<div className={styles.categoryField}>
							<CategoryInTodoCard />

							<div className={styles.categoryContainer}>
								<div className={styles.category}>
									Life <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Study <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Work <i className="fa-solid fa-x"></i>
								</div>
							</div>
						</div>

						<div className={styles.date}>
							<p>Start Date: </p>
							<p>Finished Date: </p>
						</div>
					</div>

					<div className={styles.cardFooter}>
						<i className="icon--trash fa-solid fa-trash-can"></i>
						<input className={styles.cardCheckbox} type="checkbox" />
					</div>
				</div>

				<div className={styles.todoCard}>
					<div className={styles.cardHeader}>
						{/* <input
							className={styles.inputEdit}
							type="text"
							placeholder="Cooking"
						/> */}
						<p className={styles.cardTitle}>Cooking</p>
						<i className="fa-solid fa-pen"></i>
					</div>

					<div className={styles.cardBody}>
						<div className={styles.categoryField}>
							<CategoryInTodoCard />

							<div className={styles.categoryContainer}>
								<div className={styles.category}>
									Life <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Study <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Work <i className="fa-solid fa-x"></i>
								</div>
							</div>
						</div>

						<div className={styles.date}>
							<p>Start Date: </p>
							<p>Finished Date: </p>
						</div>
					</div>

					<div className={styles.cardFooter}>
						<i className="icon--trash fa-solid fa-trash-can"></i>
						<input className={styles.cardCheckbox} type="checkbox" />
					</div>
				</div>

				<div className={styles.todoCard}>
					<div className={styles.cardHeader}>
						{/* <input
							className={styles.inputEdit}
							type="text"
							placeholder="Cooking"
						/> */}
						<p className={styles.cardTitle}>Cooking</p>
						<i className="fa-solid fa-pen"></i>
					</div>

					<div className={styles.cardBody}>
						<div className={styles.categoryField}>
							<CategoryInTodoCard />

							<div className={styles.categoryContainer}>
								<div className={styles.category}>
									Life <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Study <i className="fa-solid fa-x"></i>
								</div>

								<div className={styles.category}>
									Work <i className="fa-solid fa-x"></i>
								</div>
							</div>
						</div>

						<div className={styles.date}>
							<p>Start Date: </p>
							<p>Finished Date: </p>
						</div>
					</div>

					<div className={styles.cardFooter}>
						<i className="icon--trash fa-solid fa-trash-can"></i>
						<input className={styles.cardCheckbox} type="checkbox" />
					</div>
				</div>
			</div>
		</div>
	);
}
