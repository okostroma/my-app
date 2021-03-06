import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH_REDUCER/SET_USER_DATA'

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
                ...action.payload
            }


        default:
            return state;

    }

}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export const isOnAuth = () => {
    return async (dispatch) => {
        let data = await authAPI.getAuthData();

        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {

        let data = await authAPI.login(email, password, rememberMe);

        if (data.resultCode === 0) {
            dispatch(isOnAuth())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'some error'
            dispatch(stopSubmit('login', {_error: message}));
        }

    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }
}


export default authReducer;
