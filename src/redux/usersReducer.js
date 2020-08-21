import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";


const FOLLOW = 'USERS_REDUCER/FOLLOW';
const UNFOLLOW = 'USERS_REDUCER/UNFOLLOW';
const SET_USERS = 'USERS_REDUCER/SET-USERS';
const SET_CURRENT_PAGE = 'USERS_REDUCER/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'USERS_REDUCER/SET-TOTAL-COUNT';
const TOGGLE_FETCHING = 'USERS_REDUCER/TOGGLE-FETCHING';
const TOGGLE_FOLLOWING = 'USERS_REDUCER/TOGGLE_FOLLOWING'


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            debugger
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }

        case UNFOLLOW:
            debugger
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;

    }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId: userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount: totalUsersCount})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching: isFetching})
export const toggleFollowing = (followingInProgress, userId) => ({type: TOGGLE_FOLLOWING, followingInProgress, userId})

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(toggleFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch, userId,apiMethod,actionCreator) => {
    dispatch(toggleFollowing(true, userId))
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
        dispatch(toggleFollowing(false, userId))
    }
}

export const unfollowUser = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch,userId,usersAPI.unfollowUser.bind(usersAPI),unfollowSuccess)
    }
}

export const followUser = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch,userId,usersAPI.followUser.bind(usersAPI),followSuccess)
    }
}


export default usersReducer;
