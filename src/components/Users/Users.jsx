import React from "react";
import classes from './Users.module.css'
import Paginator from "./Paginator";
import User from "./User";

const Users = (props) => {

    return (<div className={classes.usersPage}>

        {!props.isFetching ? <div>

            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged} portionSize={10}/>

            <div className={classes.users}>
                {props.users.map(user => <User followingInProgress={props.followingInProgress}
                                               unFollow={props.unFollow} follow={props.follow} user={user} key={user.id}/>)}
            </div>
        </div> : null}
    </div>)


}

export default Users;

