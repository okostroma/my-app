import React from "react";
import './Header.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormControls";
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

const LoginForm =(props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder='email' name={'email'} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} placeholder='password' name={'password'} type='password' component={Input}/>
            </div>
            <div>
                <Field type='checkbox' name={'rememberMe'} component={'input'}/> Remember me
            </div>
            {props.error && <div className={classes.formError}>
                {props.error}
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

