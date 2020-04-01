import React from "react";
import './Profile.module.css';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img className={classes.mainPic}
                      src="https://www.twotickets.com.ua/wp-content/uploads/revslider/travel-home/h3-rev-slider-img-1.jpg"/>
            </div>
            <div>
                <img className={classes.avatar}
                     src="https://www.canva.com/wp-content/themes/canvaabout/img/colorPalette/image4.jpg"/>

            </div>
            <MyPosts />


        </div>
    );
}

export default Profile;

