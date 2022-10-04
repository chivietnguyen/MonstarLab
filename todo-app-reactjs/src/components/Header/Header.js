import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<Navbar />
		</header>
	);
}
