import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';



let initialState = {
    posts: [
        {id: 0, message: "hello", like: "5"},
        {id: 1, message: "how are you?", like: "0"}
    ],
    text: '',
    profile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.text, like: "0"
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                text: ''
            }
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.text = '';
            // return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                text: action.newText
            }
            // stateCopy.text = action.newText;
            // return stateCopy;
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
        default:
            return state;

    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const addTextChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfileActionCreator = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserStatusActionCreator = (status) => ({type: GET_USER_STATUS, status})


export const getProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfileActionCreator(data))
        })
    }
}

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            console.log(data)
            dispatch(getUserStatusActionCreator(data))
        })
    }
}

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(getUserStatusActionCreator(status))
            }

        })
    }
}

export default profileReducer;

