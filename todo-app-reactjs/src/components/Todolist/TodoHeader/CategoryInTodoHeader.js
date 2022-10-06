import React from "react";

import styles from "./CategoryInTodoHeader.module.css";

export default function CategoryInTodoHeader() {
	return (
		<div className={`category ${styles.category}`}>
			<div className="category__title">
				<i className="fa-solid fa-filter"></i> Category
			</div>

			<div className="selection__container">
				<div className="selection">
					<input className="checkbox" type="checkbox" /> Life
				</div>

				<div className="selection">
					<input className="checkbox" type="checkbox" /> Study
				</div>

				<div className="selection">
					<input className="checkbox" type="checkbox" /> Work
				</div>
			</div>
		</div>
	);
}
