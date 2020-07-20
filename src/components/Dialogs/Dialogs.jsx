import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog";
import Message from "./Message";
import {
    addMessageActionCreator,
    addSendMessageActionCreator,
} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../FormsControls/FormControls";
import {maxLenghtCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {



    let addNewMessage = (values) => {
        // props.dispatch(addSendMessageActionCreator() );
        props.addNewMessage(values.newMessageText);

    }

    let dialogElements = props.dialogsReducer.dialogs.map(dialog => <Dialog id={dialog.id} key={dialog.id}
                                                                            name={dialog.name}/>)

    let messageElements = props.dialogsReducer.messages.map(message => {

        return <Message key={message.id} message={message.message}/>
    })

    if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>

                {dialogElements}


            </div>
            <div className={classes.messages}>

                {messageElements}

                <AddNewMessageFormRedux onSubmit={addNewMessage} />

            </div>

        </div>
    );
}
// const maxLength10 = maxLenghtCreator(10);

const AddNewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.textArea}>
            <Field validate={[required]} component={TextArea} name='newMessageText' className={classes.text}/>
            <button className={classes.btn}>Send</button>
        </form>
    )
}

const AddNewMessageFormRedux = reduxForm({form: 'AddNewMessageForm'})(AddNewMessageForm)

export default Dialogs;

