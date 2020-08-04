import {profileAPI} from "../api/api";

const ADD_POST = 'PROFILE_REDUCER/ADD-POST';
const SET_USER_PROFILE = 'PROFILE_REDUCER/SET-USER-PROFILE';
const GET_USER_STATUS = 'PROFILE_REDUCER/GET_USER_STATUS';
const DELETE_POST = 'PROFILE_REDUCER/DELETE_POST'



let initialState = {
    posts: [
        {id: 0, message: "hello", like: "5"},
        {id: 1, message: "how are you?", like: "0"}
    ],
    profile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: action.newPostText, like: "0"
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                text: ''
            }

        }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case GET_USER_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state;

    }

};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfileActionCreator = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserStatusActionCreator = (status) => ({type: GET_USER_STATUS, status});
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId});


export const getProfileThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId);
            dispatch(setUserProfileActionCreator(data))
    }
};

export const getStatusThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId);
            console.log(data);
            dispatch(getUserStatusActionCreator(data))
    }
};

export const updateStatusThunk = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status);
            if (data.resultCode === 0) {
                dispatch(getUserStatusActionCreator(status))
            }
    }
};

export default profileReducer;


