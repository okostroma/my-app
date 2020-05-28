import React from "react";
import classes from './FriendsItem.module.css'
import PropTypes from 'prop-types';

const FriendsItem = (props) => {

    return (

        <div className={classes.item}>
            <img className={classes.avaMessage} src={props.img}/>
            <span className={classes.name}>{props.name}</span>
        </div>


    )

}

FriendsItem.propTypes = {
    name: PropTypes.string,
    img: PropTypes.any
}

export default FriendsItem;