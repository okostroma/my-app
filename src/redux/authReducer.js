import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
// const TOGGLE_FETCHING = 'TOGGLE-FETCHING'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false


};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data, isAuth: true
            }


        default:
            return state;

    }

}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

export const isOnAuth = () => {
    return (dispatch) => {
        usersAPI.getAuthData().then(data => {

            if(data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }

        })
    }
}



export default authReducer;