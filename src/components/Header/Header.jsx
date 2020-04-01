import React from "react";
import './Header.module.css';
import classes from './Header.module.css';


const Header = () => {
    return (
<header className={classes.header}>
    <img className={classes.logo}
         src="https://lh3.googleusercontent.com/proxy/o159CSx39doIr_SuWydWler0JQhQ_63iGqnz6t8hsXYWSSOcNa5LfItySKD4vRkj7lVgn9zNSbzKUSj3h3dnf7XRJUZha560WAVxtEZlHWCCKmyHNmVYMpbF"/>
</header>
    );
}

export default Header;

