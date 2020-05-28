import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

      // let state = props.store.getState();

    return (
        <div className={classes.content}>

            <ProfileInfo/>
            <MyPostsContainer />


        </div>
    );
}

export default Profile;

