import React from "react";
import {
    addMessageActionCreator,
    addSendMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



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


// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent)

export default compose(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect ) (Dialogs);

