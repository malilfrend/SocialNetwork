import React from 'react';import Profile from "./Profile";import {connect} from "react-redux";import {getUserProfileThunk, setUserStatusThunk, updateUserStatusThunk} from "../../redux/profile-reducer";import withRouter from "../HOC/withRouter";import {compose} from "redux";import withAuthRedirect from "../HOC/withAuthRedirect";class ProfileContainer extends React.Component{	componentDidMount() {		let userId = this.props.userId ?? 25026		this.props.getUserProfileThunk(userId)		this.props.setUserStatusThunk(userId)	}		render() {		return (			<div>				<Profile					{...this.props}					profile={this.props.profile}					status={this.props.status}					updateUserStatusThunk={this.props.updateUserStatusThunk}				/>			</div>		)	}}let mapStateToProps = (state) => {	return {		profile: state.profilePage.profile,		status: state.profilePage.status,	}}export default compose(	connect(mapStateToProps, {getUserProfileThunk, setUserStatusThunk, updateUserStatusThunk}),	withRouter,	withAuthRedirect	)(ProfileContainer)