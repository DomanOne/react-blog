import React from "react";
import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
	const navigation = useNavigate();

	const handleNavigate = (x) => {
		navigation(`/blog/${x.slug}`, { state: { post: x } });
	};

	return (
		<div className={styles.card}>
			<img
				className={styles.post}
				src={`https://picsum.photos/id/${post.postImg}/200/300`}
				alt=""
			/>
			<h3 className={styles.name}>{post.title}</h3>
			<div className={styles.authorbox}>
				<img
					className={styles.autor}
					src={`https://i.pravatar.cc/150?img=${post.authorImg}`}
					alt=""
				/>
				<p className={styles.author}>Author:{post.author}</p>
			</div>
			<div className={styles.btn}>
				<button onClick={() => handleNavigate(post)} key={post.title}>
					More...
				</button>
			</div>
		</div>
	);
};

export default Post;
