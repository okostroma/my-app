import ava from './ava.png'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";



let store = {
    _rerenderEntireTree() {

    },
    _state: {
        profilePage: {
            posts: [
                {id:0, message: "hello", like: "5"},
                {id:1, message: "how are you?", like: "0"}
            ],
            text: ''
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Oxa"},
                {id: 3, name: "Andrew"},
                {id: 4, name: "Roman"}
            ],

            messages: [
                {id: 1, message: "Hello", rightElement: false},
                {id: 2, message: "how are you?", rightElement: true},
                {id: 3, message: "yo", rightElement: false},
                {id: 4, message: "yo", rightElement: true}
            ],
            newMessageText: ''
        },
        friendsPage: {
            friends: [
                {id: 1, name: "Sasha", ava: ava},
                {id: 2, name: "Oxa", ava: ava},
                {id: 3, name: "Andrew", ava: ava}
            ]
        }

    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._rerenderEntireTree(this._state);

    }


}


export default store;