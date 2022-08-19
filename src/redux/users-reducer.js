import {usersAPI} from "../api/api";const FOLLOW = 'social_network/users/FOLLOW'const UNFOLLOW = 'social_network/users/UNFOLLOW'const SET_USERS = 'social_network/users/SET-USERS'const SET_CURRENT_PAGE = 'social_network/users/SET-CURRENT-PAGE'const SET_TOTAL_USERS_COUNT = 'social_network/users/SET-TOTAL-USERS-COUNT'const TOGGLE_IS_FETCHING = 'social_network/users/TOGGLE-IS-FETCHING'const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'social_network/users/TOGGLE-IS-FOLLOWING-IN-PROGRESS'let initialState = {	usersData: [		],	pageSize: 20,	totalUsersCount: 0,	currentPage: 1,	isFetching: false,	followingInProgress: [],}const usersReducer = (state = initialState, action) => {		switch (action.type) {		case FOLLOW:			return {				...state,				usersData: state.usersData.map(user => {					if (user.id === action.userId) {						return {...user, followed: true}					}					return user				}),			}		case UNFOLLOW:			return {				...state,				usersData: state.usersData.map(user => {					if (user.id === action.userId) {						return {...user, followed: false}					}					return user				})			}		case SET_USERS:			return {				...state,				usersData: action.users			}		case SET_CURRENT_PAGE:			return {				...state,				currentPage: action.currentPage			}		case SET_TOTAL_USERS_COUNT:			return {				...state,				totalUsersCount: action.totalUsersCount			}		case TOGGLE_IS_FETCHING:			return {				...state,				isFetching: action.isFetching			}		case TOGGLE_IS_FOLLOWING_IN_PROGRESS:			return {				...state,				followingInProgress: action.isFetching					? [...state.followingInProgress, action.userId]					: state.followingInProgress.filter(id => id !== action.userId)			}		default:			return state	}}const followSuccess = (userId) => {	return {		type: FOLLOW,		userId	}}const unfollowSuccess = (userId) => {	return {		type: UNFOLLOW,		userId	}}const setUsers = (users) => {	return {		type: SET_USERS,		users	}}const setCurrentPage = (currentPage) => {	return {		type: SET_CURRENT_PAGE,		currentPage	}}const setTotalUsersCount = (totalUsersCount) => {	return {		type: SET_TOTAL_USERS_COUNT,		totalUsersCount	}}const toggleIsFetching = (isFetching) => {	return {		type: TOGGLE_IS_FETCHING,		isFetching	}}const toggleIsFollowingInProgress = (isFetching, userId) => {	return {		type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,		isFetching,		userId	}}const requestUsers = (currentPage, pageSize) => async (dispatch) => {	dispatch(toggleIsFetching(true))	let data = await usersAPI.getUsers(currentPage, pageSize)	dispatch(setUsers(data.items))	dispatch(setTotalUsersCount(data.totalCount))	dispatch(toggleIsFetching(false))}const follow = (userId) => async (dispatch) => {	dispatch(toggleIsFollowingInProgress(true, userId))	let data = await usersAPI.follow(userId)	if (data.resultCode === 0) {		dispatch(followSuccess(userId))	}	dispatch(toggleIsFollowingInProgress(false, userId))}const unfollow = (userId) => async (dispatch) => {	dispatch(toggleIsFollowingInProgress(true, userId))	let data = await usersAPI.unfollow(userId)	if (data.resultCode === 0) {		dispatch(unfollowSuccess(userId))	}	dispatch(toggleIsFollowingInProgress(false, userId))}// actionCreatorsexport {	usersReducer,	followSuccess,	unfollowSuccess,	setUsers,	setCurrentPage,	setTotalUsersCount,	toggleIsFetching,	toggleIsFollowingInProgress,}// thunkCreatorsexport {	requestUsers,	follow,	unfollow}