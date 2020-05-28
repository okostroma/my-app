import React from "react";
import classes from './Users.module.css'
import ava from "../../redux/ava.png";
import * as axios from 'axios'
import userPhoto from '../../assets/img/user.png'


const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    return (
        <div className={classes.usersPage}>

            <p className={classes.users}>Users</p> <button onClick={getUsers}> Get Users </button>


            {props.users.map(user => <div key={user.id}>
                <div className={classes.userBlock}>
                <span>
                <div>
                    <img className={classes.avaMessage}
                         src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                </div>
                <div>
                    {user.followed ? <button onClick={() => {
                            props.unFollow(user.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>}
                </div>
                </span>
                    <div className={classes.userBlockBody}>
                    <span>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}

                        </div>

                    </span>
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
    )
}


export default Users;

