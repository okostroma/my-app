import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    friendsReducer: friendsReducer,
    usersReducer: usersReducer,
    auth: authReducer,
    form: formReducer
})


let store = createStore(reducers, applyMiddleware(thunk));


window.store = store;


export default store;