import React from "react";
import classes from './FormControls.module.css'


const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>

            {props.children}
            <div>
                { hasError && <span className={classes.error}> {meta.error}</span>}
            </div>

        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, ...restProps} = props;
   return (<FormControl {...props}> <textarea  {...input} {...restProps}/></FormControl>)
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (<FormControl {...props}> <input  {...input} {...restProps}/></FormControl>)

}



