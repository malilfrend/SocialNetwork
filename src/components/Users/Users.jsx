import React from 'react';import classes from "./User/User.module.css";import userPhoto from "../../assets/images/userPhoto.png";import {NavLink} from "react-router-dom";import {usersAPI} from "../../api/api";import {toggleIsFollowingInProgress} from "../../redux/users-reducer";const Users = (props) => {		let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)		let pagesArray = []		for (let i = 1; i <= pagesCount; i++) {		pagesArray.push(i)	}		return (		<div>			<div>				{					pagesArray.map( item => {						return <span key={Math.random()} className={props.currentPage === item && classes.selected_page}									 onClick={() => {										 props.onPageChanched(item)									 }}								>								{item}							</span>					})				}			</div>			{				props.usersData.map( user =>					<div className={classes.wrapper} key={Math.random()}>						<div className={classes.leftside}>							<div className={classes.avatar}>								<NavLink to={`/profile/${user.id}`}>									<img src={ user.photos.small != null										? user.photos.small										: userPhoto									} alt={''}									/>								</NavLink>															</div>							<div className={classes.follow_btn}>								{									user.followed										?										<button disabled={props.followingInProgress.some(id => id == user.id)}											onClick={() => {props.unfollow(user.id)}}										>											Unfollow										</button>										:										<button disabled={props.followingInProgress.some(id => id == user.id)}												onClick={() => {props.follow(user.id)}										}>											Follow										</button>								}							</div>						</div>						<div className={classes.user_info}>							<div className={classes.name_and_status}>								<div className={classes.name}>									{user.name}								</div>								<div className={classes.status}>									{user.status}								</div>							</div>							<div className={classes.location}>								<div className={classes.location_country}>									{										'Country'									}								</div>								<div className={classes.location_city}>									{										'City'									}								</div>							</div>						</div>					</div>				)			}		</div>	)};export default Users;