import React from "react";
import './Header.module.css';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from './../FormsControls/FormControls.module.css'



const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe)

    }
    if (props.isAuth) return <Redirect to='/profile'/>
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

const LoginForm =({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField([required],'email','email',Input)}
            {createField([required],'password','password',Input, {type:'password'})}
            {createField(null,null,'rememberMe',Input, {type:'checkbox'}, 'remember me' )}

            {error && <div className={classes.formError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }

}


export default connect(mapStateToProps, {login, logout})(Login);

