import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import avaMessage from './avaMessage.png'



const Dialog = (props) => {
    return (
        <div className={classes.dialogCol}>
            <img className={classes.avaMessage} src={avaMessage}/>
            <NavLink to={"/dialogs/" + props.id}><span className={classes.name}>{props.name}</span></NavLink>
        </div>
    )
}



export default Dialog;

