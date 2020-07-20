import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import ProfileInfoWithHooks from "./ProfileInfoWithHooks";


const Profile = (props) => {



    return (
        <div className={classes.content}>

            <ProfileInfoWithHooks status={props.status} profile={props.profile} updateStatus={props.updateStatus}/>
            <MyPostsContainer />


        </div>
    );
}

export default Profile;

