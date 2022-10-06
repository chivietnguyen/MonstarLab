import React, { useContext } from "react";
import {
	handleSelectCategories,
	twoWayBindingChecked,
} from "../../../helper/helper";
import { CategoriesContext } from "./AddTodoPopUp";

export default function CategoryInAddTodoPopUp() {
	const [categories, categoriesSelected, setCategoriesSelected] =
		useContext(CategoriesContext);

	return (
		<div className="category">
			<div className="category__title">
				<i className="fa-solid fa-filter"></i> Category
			</div>
			<div className="selection__container">
				{categories.map((category) => (
					<div key={category.id} className="selection">
						<input
							id={category.id}
							className="checkbox"
							type="checkbox"
							onChange={() =>
								handleSelectCategories(
									category.id,
									category.name,
									categoriesSelected,
									setCategoriesSelected
								)
							}
							checked={twoWayBindingChecked(categoriesSelected, category.id)}
						/>
						{category.name}
					</div>
				))}
			</div>
		</div>
	);
}
