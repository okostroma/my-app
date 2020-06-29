import React from "react";
import './Nav.module.css';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";
import FriendsContainer from "./FriendsContainer";

const Nav = (props) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/dialogs'} activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/news'} activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/music'} activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/settings'} activeClassName={classes.active}>Settings</NavLink>
            </div>


            <div className={classes.friends}>
                <NavLink to={'/friends'} activeClassName={classes.active}>Friends</NavLink>
            </div>
            {/*<Friends friends={props.state.friendsReducer.friends}/>*/}

            <FriendsContainer />

            <div className={classes.itemUsers}>
                <NavLink to={'/users'} activeClassName={classes.active}>Find Users</NavLink>
            </div>

        </nav>

    );
}


export default Nav;

