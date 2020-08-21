import React from "react";
import classes from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import {NavLink} from "react-router-dom";

const User = (props) => {

    return (<div className={classes.userItem}>
        <div className={classes.userBlock}>
                <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                         <img className={classes.avaMessage}
                              src={props.user.photos.small !== null ? props.user.photos.small : userPhoto} alt='photo'/>
                    </NavLink>
                </div>
                <div>
                    {props.user.followed ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                             onClick={() => {
                                                 props.unFollow(props.user.id)
                                             }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                onClick={() => {
                                    props.follow(props.user.id)
                                }
                                }>Follow</button>}
                </div>
                </span>
            <div className={classes.userBlockBody}>

                <div>
                    {props.user.name}
                </div>
                <div className={classes.userStatus}>
                    {props.user.status}

                </div>

                {/*<span>*/}
                {/*        <div>*/}
                {/*            {'user.location.city'}*/}

                {/*        </div>*/}
                {/*        <div>*/}
                {/*            {'user.location.country'}*/}

                {/*        </div>*/}

                {/*    </span>*/}
            </div>
        </div>


    </div>)


}


export default User;

