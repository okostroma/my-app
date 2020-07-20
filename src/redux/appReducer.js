
import {isOnAuth, setAuthUserData} from "./authReducer";

const IS_INITIALIZED = 'IS_INITIALIZED'

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_INITIALIZED:
            return {
                ...state,
                initialized: true
            }


        default:
            return state;

    }

}

export const isInitialized = () => ({type: IS_INITIALIZED})

export const initialise = () => {
    return (dispatch) => {
        debugger
        dispatch(isOnAuth()).then(()=> {
            dispatch(isInitialized())
        })

    }
}




export default appReducer;
