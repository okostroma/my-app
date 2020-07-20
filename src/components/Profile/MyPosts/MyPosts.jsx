import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../FormsControls/FormControls";



const MyPosts = (props) => {

    let addPost = (values) => {
        // props.dispatch(addPostActionCreator());
        props.addPost(values.newPostText);
    }


    let postElement = props.posts.map(post => <Post key={post.id} message={post.message} like={post.like}/>)

    return (
        <div className={classes.postInfo}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>

            {postElement}
        </div>
    );
}

const maxLength10 = maxLenghtCreator(10);

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  validate={[required, maxLength10]} component={TextArea} placeholder="New post" name='newPostText'/>
            </div>
            <div className={classes.addPost}>
                <button >Add post</button>
            </div>
        </form>
    )

}

const AddNewPostFormRedux = reduxForm({form:'AddNewPostForm'})(AddNewPostForm)

export default MyPosts;

