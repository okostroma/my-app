import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
    let newPostRef = React.createRef();

    let addPost = () => {
        // props.dispatch(addPostActionCreator());
        props.addPost();

    }
    let onTextChange = () => {
        let text = newPostRef.current.value;
        props.onTextChange(text);
        // props.dispatch(addTextChangeActionCreator(text));

    }


    let postElement = props.posts.map(post => <Post key={post.id} message={post.message} like={post.like}/>)

    return (
        <div className={classes.postInfo}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onTextChange} ref={newPostRef} placeholder="New post" value={props.text}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            {postElement}
        </div>
    );
}

export default MyPosts;

