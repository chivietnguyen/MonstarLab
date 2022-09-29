import styles from "./TodoHeader.module.css";

export default function TodoHeader() {
	return (
		<>
			<div className={styles.formCreateContainer}>
				<h2 className={styles.title}>What is your plans?</h2>
				<form className={`form ${styles.formCreate}`}>
					<input
						className="input"
						type="text"
						placeholder="Create new tasks ..."
					/>
					<button className={`button ${styles.buttonCreate}`}>Create</button>
				</form>
			</div>

			<div className={styles.filtersSearchContainer}>
				<div className={styles.filtersContainer}>
					<div className={styles.filtersBox}>
						<i className="icon--filter fa-solid fa-filter"></i>
						<select className={styles.filters}>
							<option value="">Filters</option>
							<option value="life">Life</option>
							<option value="study">Study</option>
							<option value="work">Work</option>
						</select>
					</div>

					<div className={styles.filterElements}>
						<div className={styles.filterElement}>
							Life
							<i className="icon--x fa-solid fa-x"></i>
						</div>
						<div className={styles.filterElement}>
							Study
							<i className="icon--x fa-solid fa-x"></i>
						</div>
						<div className={styles.filterElement}>
							Work
							<i className="icon--x fa-solid fa-x"></i>
						</div>
					</div>
				</div>

				<form className={`form ${styles.formSearch}`}>
					<input
						className="input"
						type="text"
						placeholder="Search by keywords"
					/>
					<button className={`button ${styles.buttonSearch}`}>Search</button>
				</form>
			</div>
		</>
	);
}
