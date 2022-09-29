import React from "react";
import styles from "./TodoFooter.module.css";

export default function TodoFooter() {
	return (
		<div className={styles.container}>
			<div className={styles.checkboxContainer}>
				<input id="checkbox" type="checkbox" />
				<label className={styles.checkboxTitle} htmlFor="checkbox">
					Finish all
				</label>
			</div>

			<div>
				<button className={styles.buttonPagination}>1</button>
				<button className={styles.buttonPagination}>2</button>
				<button className={styles.buttonPagination}>3</button>
			</div>
		</div>
	);
}
