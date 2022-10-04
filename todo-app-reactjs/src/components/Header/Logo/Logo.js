import React from "react";
import { TODO_PATH } from "../../../path/path";

import styles from "./Logo.module.css";

export default function Logo() {
	return (
		<div>
			<a className={styles.link} href={TODO_PATH}>
				Todos
			</a>
		</div>
	);
}
