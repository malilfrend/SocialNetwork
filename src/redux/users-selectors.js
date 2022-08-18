import {createSelector} from "reselect";

export const getUsersSel = (state) => {
	return state.usersPage.usersData
}
export const getUsersSelector = createSelector(getUsersSel, (users) => {
	return users
})

export const getPageSizeSel = (state) => {
	return state.usersPage.pageSize
}
export const getPageSizeSelector = createSelector( getPageSizeSel,(pageSize) => {
	return pageSize
})

export const getTotalUsersCountSel = (state) => {
	return state.usersPage.totalUsersCount
}
export const getTotalUsersCountSelector = createSelector( getTotalUsersCountSel,(totalUsersCount) => {
	return totalUsersCount
})

export const getCurrentPageSel = (state) => {
	return state.usersPage.currentPage
}
export const getCurrentPageSelector = createSelector( getCurrentPageSel,(currentPage) => {
	return currentPage
})

export const getIsFetchingSel = (state) => {
	return state.usersPage.isFetching
}
export const getIsFetchingSelector = createSelector( getIsFetchingSel,(isFetching) => {
	return isFetching
})


export const getFollowingInProgressSel = (state) => {
	return state.usersPage.followingInProgress
}
export const getFollowingInProgressSelector = createSelector( getFollowingInProgressSel,(followingInProgress) => {
	return followingInProgress
})
