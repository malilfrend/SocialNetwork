import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm";

const MyPosts = (props) => {
	
	if(!props.postsData) {
		return <div>Skeleton</div>
	}
	let postsElements = props?.postsData
		.map(p =>
			<Post title={p.title} body={p.body} photo={props?.photo} key={Math.random() + Math.random()}/>
		)
	
	const onSubmit = (title, body) => {
		props.addNewPost(title, body)
	}

	return (
		<div className={classes.myPosts}>
			<h1 className={classes.h1}>My posts</h1>
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