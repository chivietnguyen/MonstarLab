import React from "react";

import "./Todolist.css";

export default function Todolist() {
	return (
		<div className="todolist__container">
			<h1 className="todolist__title">What is your plan?</h1>

			<div className="todolist__header">
				<div className="form__container">
					<form className="form--create">
						<input type="text" />
						<button></button>
					</form>

					<form className="form--search">
						<button></button>
						<input type="text" />
					</form>
				</div>

        <div className="filter__container">
          <select name="" id="">
            <option value="life">Life</option>
            <option value="study">Study</option>
            <option value="work">Work</option>
          </select>
        </div>
			</div>
		</div>
	);
}
