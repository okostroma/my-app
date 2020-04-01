import React from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                new post

            </div>
            <Post/>
            <Post/>
        </div>
    );
}

export default MyPosts;

