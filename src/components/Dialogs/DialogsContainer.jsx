import React from "react";
import {
    addMessageActionCreator,
    addSendMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
     return {
         dialogsReducer: state.dialogsReducer
     }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addSendMessageActionCreator())
        },
        onTextMessageChange: (message)=> {
            dispatch(addMessageActionCreator(message))
        }
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer;

