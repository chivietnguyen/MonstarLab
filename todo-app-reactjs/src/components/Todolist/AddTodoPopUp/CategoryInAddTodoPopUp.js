import React from "react";

export default function CategoryInAddTodoPopUp() {
	return (
		<div className="category">
			<div className="category__title">
				<i className="fa-solid fa-filter"></i> Category
			</div>

			<div className="selection__container">
				<div className="selection">
					<input className="checkbox" type="checkbox" /> Life
				</div>
			</div>
		</div>
	);
}
