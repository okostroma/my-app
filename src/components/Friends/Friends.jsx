import React from "react";
import classes from './Friends.module.css'
import avaMessage from "./avaMessage.png";
import FriendsItem from "./FriendsItem";
import PropTypes from 'prop-types';

const Friends = (props) => {

    let friendsElement = props.friends.map(friend => <FriendsItem key={friend.id} name={friend.name} img={friend.ava}/>)

    return (
        <div className={classes.friendsBlock}>
            {friendsElement}

        </div>
    )

}

Friends.propTypes = {
    friends: PropTypes.array,
    name: PropTypes.string
}


export default Friends;