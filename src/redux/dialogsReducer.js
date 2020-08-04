
const SEND_MESSAGE = 'DIALOGS_REDUCER/SEND-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: newMessage} ]
            }

        default:
            return state;

    }


}


export const addSendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})


export default dialogsReducer;
