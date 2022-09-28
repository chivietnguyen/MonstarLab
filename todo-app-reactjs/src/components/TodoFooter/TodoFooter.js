import React from "react";

export default function TodoFooter() {
	return (
		<div className="todolist__footer">
			<div className="select-all__container">
				<input
					id="input--select-all"
					className="input--select-all"
					type="checkbox"
				/>
				<label htmlFor="input--select-all">Finish all</label>
			</div>

			<div className="pagination">
				<button className="button--pagination">1</button>
				<button className="button--pagination">2</button>
				<button className="button--pagination">3</button>
			</div>
		</div>
	);
}
