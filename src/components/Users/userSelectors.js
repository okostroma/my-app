import {createSelector} from "reselect";
const getAllUsers = (state) => {
    return state.usersReducer.users
}
export const getAllUsersSelector = createSelector(getAllUsers,(users) => {
     return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersReducer.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersReducer.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage
}
export const getIsFetching= (state) => {
    return state.usersReducer.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersReducer.followingInProgress
}


