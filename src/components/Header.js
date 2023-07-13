import React from "react";
import logo from "../newlogo.svg";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import "animate.css";

const Header = () => {
	return (
		<header>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={styles.namepage}>
					<h1 className="animate__backOutRight">Loser Traders</h1>
				</div>

				<nav className={styles.nav}>
					<ul>
						<li className={styles.navItem}>
							<Link to="/">Homepage </Link>
						</li>
						<li className={styles.navItem}>
							<Link to="/about">About us </Link>
						</li>
						<li className={styles.navItem}>
							<Link to="/contact">Contact </Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
