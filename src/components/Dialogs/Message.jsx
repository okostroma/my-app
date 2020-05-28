import React from "react";
import classes from './Dialogs.module.css'
import avaMessage from './avaMessage.png'




const Message = (props) => {

    return (
        <div className={classes.dialog}>
            <img className={classes.avaMessage + ' ' + props.className} src={avaMessage}/>
            <span className={classes.messageText + ' ' + props.className}>{props.message}</span>
        </div>
    )
}




export default Message;

