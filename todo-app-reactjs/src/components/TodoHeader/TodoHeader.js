import React from "react";

export default function TodoHeader() {
	return (
		<div className="todolist__header">
			<div className="form--create__container">
				<h2 className="todo__title">What is your plans?</h2>
				<form className="form form--create">
					<input
						className="input input--create"
						type="text"
						placeholder="Create new tasks ..."
					/>
					<button className="button button--create">Create</button>
				</form>
			</div>

			<div className="filters-search__container">
				<div className="filters__container">
					<div className="filters__box">
						<i className="icon--filter fa-solid fa-filter"></i>
						<select className="filters">
							<option value="">Filters</option>
							<option value="life">Life</option>
							<option value="study">Study</option>
							<option value="work">Work</option>
						</select>
					</div>

					<div className="filter__elements">
						<div className="filter__element">
							Life
							<i className="icon--x fa-solid fa-x"></i>
						</div>
						<div className="filter__element">
							Study
							<i className="icon--x fa-solid fa-x"></i>
						</div>
						<div className="filter__element">
							Work
							<i className="icon--x fa-solid fa-x"></i>
						</div>
					</div>
				</div>

				<form className="form form--search">
					<input
						className="input input--search"
						type="text"
						placeholder="Search by keywords"
					/>
					<button className="button button--search">Search</button>
				</form>
			</div>
		</div>
	);
}
