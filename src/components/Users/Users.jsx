import React from "react";
import classes from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import {NavLink} from "react-router-dom";



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div className={classes.usersPage}>

        {!props.isFetching ? <div>
            <div>
                {pages.map(p => {
                    return <span className={`${props.currentPage === p && classes.selectedPage} ${classes.page}`}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>


            <div className={classes.users}>
                {props.users.map(user => <div className={classes.userItem} key={user.id}>
                    <div className={classes.userBlock}>
                <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                         <img className={classes.avaMessage}
                         src={user.photos.small !== null ? user.photos.small : userPhoto} alt='photo'/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                             onClick={ () => {props.unFollow(user.id)}}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={ () =>{props.follow(user.id)}
                        }>Follow</button>}
                </div>
                </span>
                        <div className={classes.userBlockBody}>

                            <div>
                                {user.name}
                            </div>
                            <div className={classes.userStatus}>
                                {user.status}

                            </div>

                            <span>
                        <div>
                            {'user.location.city'}

                        </div>
                        <div>
                            {'user.location.country'}

                        </div>

                    </span>
                        </div>
                    </div>


                </div>)}

            </div>
        </div> : null}
    </div>

}


export default Users;

