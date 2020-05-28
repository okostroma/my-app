import React from "react";
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (<div>
            <div className={classes.mainPic}>

            </div>
            <div className={classes.info}>
                <img className={classes.avatar}
                     src="https://www.canva.com/wp-content/themes/canvaabout/img/colorPalette/image4.jpg"/> +
                description

            </div>
        </div>
    )
}


export default ProfileInfo;

