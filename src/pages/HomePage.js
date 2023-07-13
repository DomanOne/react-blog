import React from "react";
import MainTemplate from "../template/MainTemplate";
// import { useNavigate } from "react-router-dom";
import { posts } from "../fakeDb";
import Post from "../components/Post";
import styles from "./HomePages.module.css";

const HomePage = () => {
	return (
		<MainTemplate>
			<div>
				<h1 class="animate__rotateOutDownLeft">Homepage</h1>

				<h2>New posts</h2>

				<div className={styles.hpage}>
					{posts.map((post) => (
						<Post post={post} />
					))}
				</div>
			</div>
		</MainTemplate>
	);
};

export default HomePage;
