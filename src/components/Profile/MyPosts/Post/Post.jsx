import React from "react";
import classes from './Post.module.css'
import avatar from './avatar.png'


const Post = (props) => {

    return (
        <div className={classes.item}>
           <img className={classes.avatar} src={avatar} />
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>

        </div>
    );
}

export default Post;

