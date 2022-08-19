import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm";

const MyPosts = (props) => {
	
	let postsElements = props.postsData
		.map(p =>
			<Post message={p.message} likeCount={p.likeCount} key={Date.now() + Math.random()}/>
		)
	
	const onSubmit = (post) => {
		props.addNewPost(post)
	}
	return (
		<div className={classes.myPosts}>
			<h3>My posts</h3>
			<div className={classes.new_posts}>
			
			</div>
			<div className={classes.posts}>
				<MyPostsForm onSubmit={onSubmit}/>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;