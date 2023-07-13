import React from "react";
import MainTemplate from "../template/MainTemplate";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./PostPage.module.css";

const PostPage = () => {
	// const { title } = useParams();
	// console.log(title);

	const {
		state: { post },
	} = useLocation();
	console.log(post);

	return (
		<MainTemplate>
			<h1>
				#{post.id} {post.title}
			</h1>

			<div
				className={styles.box}
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
			<div className={styles.wrapper}>
				<h3>Autor:{post.author}</h3>
				<img src={`https://i.pravatar.cc/150?img=${post.authorImg}`} />
			</div>
			<button>
				<Link to="/">Back >> </Link>
			</button>
		</MainTemplate>
	);
};

export default PostPage;
