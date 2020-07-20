import React from "react";
import {
    addSendMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



const mapStateToProps = (state) => {
     return {
         dialogsReducer: state.dialogsReducer
     }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessageText) => {
            dispatch(addSendMessageActionCreator(newMessageText))
        }
    }
}



export default compose(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect ) (Dialogs);

