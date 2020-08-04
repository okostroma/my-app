import React, {useEffect, useState} from "react";
import classes from './ProfileInfo.module.css'
import PreLoader from "../Preloader/PreLoader";
import done from './done.png'
import undone from './undone.jpg';
import user from '../../assets/img/user.png';


const ProfileInfoWithHooks = (props) => {

    const [isEditMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    const isOnEditMode = () => {
        setEditMode(true)
    }

    const changeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    const onBlur = () => {
        setEditMode(false)
        props.updateStatus(status)
    }


    if (!props.profile) {
        return <PreLoader/>
    }
    return (<div>
            {/*<div className={classes.mainPic}>*/}

            {/*</div>*/}
            <div className={classes.info}>
                <img className={classes.avatar}
                     src={props.profile.photos.large || user}/>
                <div className={classes.profileInfo}>
                    <div>{props.profile.fullName}</div>
                    {/*<div>{this.props.status}</div>*/}
                    {isEditMode ? <input onChange={changeStatus} autoFocus={true} onBlur={onBlur}
                                         value={status}/> :
                        <div onDoubleClick={isOnEditMode}>{props.status || '-------'}</div>}

                    <div onDoubleClick={isOnEditMode}>{props.profile.aboutMe}</div>

                    <div>
                        Looking for a job: {props.profile.lookingForAJob ?
                        <img className={classes.job} alt='' src={done}/> :
                        <img className={classes.job} alt='' src={undone}/>}
                    </div>
                    <div>
                        Contacts:
                        <div className={classes.contacts}>
                            <a href='#'>{props.profile.contacts.facebook}</a>
                            <a href='#'>{props.profile.contacts.vk}</a>
                            <a href='#'>{props.profile.contacts.twitter}</a>
                            <a href='#'>{props.profile.contacts.instagram}</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default ProfileInfoWithHooks;

