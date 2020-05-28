const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Oxa"},
        {id: 3, name: "Andrew"},
        {id: 4, name: "Roman"}
    ],

    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "how are you?"},
        {id: 3, message: "yo"},
        {id: 4, message: "yo"}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    // let stateCopy;


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
            // return stateCopy;

        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: newMessage} ]
            }
            // return stateCopy;

        default:
            return state;

    }


}

export const addMessageActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message})

export const addSendMessageActionCreator = () => ({type: SEND_MESSAGE})


export default dialogsReducer;
