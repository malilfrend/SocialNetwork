import React from 'react';import Paginator from "../common/paginator/Paginator";import User from "./User/User";import classes from "./Users.module.css"const Users = (props) => {		return (		<div>			<div className={classes.paginator}>				<Paginator					totalUsersCount={props.totalUsersCount}					pageSize={props.pageSize}					onPageChanched={props.onPageChanched}					currentPage={props.currentPage}				/>			</div>			{				props.usersData.map( user => <User						user={user}						followingInProgress={props.followingInProgress}						follow={props.follow}						unfollow={props.unfollow}						key={Math.random()}					/>				)			}		</div>	)};export default Users;