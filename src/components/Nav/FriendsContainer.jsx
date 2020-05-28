import React from "react";
import './Nav.module.css';

import Nav from "./Nav";

import Friends from "../Friends/Friends";
import {connect} from "react-redux";



const mapStateToProps =(state) => {
    return {
        friends: state.friendsReducer.friends
    }
}



const FriendsContainer = connect(mapStateToProps) (Friends);


export default FriendsContainer;

