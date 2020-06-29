import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog";
import Message from "./Message";
import {
    addMessageActionCreator,
    addSendMessageActionCreator,
} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {

    // let state = props.state.dialogsReducer;

    let newMessageRef = React.createRef();

    let addNewMessage = () => {
        // props.dispatch(addSendMessageActionCreator() );
        props.addNewMessage();

    }
    let onTextMessageChange = () => {
        let message = newMessageRef.current.value;
        // props.dispatch(addMessageActionCreator(message));
        props.onTextMessageChange(message);

    }


    let dialogElements = props.dialogsReducer.dialogs.map (dialog=> <Dialog id={dialog.id} key={dialog.id} name={dialog.name}/>)

    let messageElements = props.dialogsReducer.messages.map(message=> {

        return <Message key={message.id} message = {message.message} />})

    if(!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>

                {dialogElements}


            </div>
            <div className={classes.messages}>

                {messageElements}

                <div className={classes.textArea}>
                    <textarea ref={newMessageRef} onChange={onTextMessageChange} className={classes.text}
                              value={props.dialogsReducer.newMessageText}/>
                    <button onClick={addNewMessage} className={classes.btn}>Send</button>
                </div>

            </div>

        </div>
    );
}

export default Dialogs;

