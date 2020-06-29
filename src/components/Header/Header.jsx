import React from "react";
import './Header.module.css';
import classes from './Header.module.css';
import logo from './logo.png'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo}
                 src={logo}/>

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }


            </div>
        </header>
    );
}

export default Header;

