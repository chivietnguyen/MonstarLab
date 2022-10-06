import React from "react";

import styles from "./TodoFooter.module.css";

export default function TodoFooter() {
	return (
		<div className={styles.container}>
			<div className={styles.paginationContainer}>
				<button className={styles.buttonPrev}>Prev</button>
				<button className={`${styles.pageNumber} ${styles.active}`}>1</button>
				<button className={styles.pageNumber}>2</button>
				<button className={styles.pageNumber}>3</button>
				<button className={styles.buttonNext}>Next</button>
			</div>
		</div>
	);
}
