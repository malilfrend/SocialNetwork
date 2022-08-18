export const getUsersSel = (state) => {
	return state.usersPage.usersData
}
export const getPageSizeSel = (state) => {
	return state.usersPage.pageSize
}
export const getTotalUsersCountSel = (state) => {
	return state.usersPage.totalUsersCount
}
export const getCurrentPageSel = (state) => {
	return state.usersPage.currentPage
}
export const getIsFetchingSel = (state) => {
	return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress
}
