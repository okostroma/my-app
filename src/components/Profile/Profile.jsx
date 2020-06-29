import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = (props) => {

      // let state = props.store.getState();


    return (
        <div className={classes.content}>

            <ProfileInfo status={props.status} profile={props.profile} updateStatus={props.updateStatus}/>
            <MyPostsContainer />


        </div>
    );
}

export default Profile;

