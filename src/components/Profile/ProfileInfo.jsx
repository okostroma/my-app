import React from "react";
import classes from './ProfileInfo.module.css'
import PreLoader from "../Preloader/PreLoader";
import done from './done.png'
import undone from './undone.jpg';
import user from '../../assets/img/user.png';


class ProfileInfo extends React.Component {

    state = {
        isEditMode: false,
        status: this.props.status
    }

    isOnEditMode = () => {
        this.setState({
            isEditMode: true
        })
    }

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })


    }
    onBlur = () => {
        this.setState({
            isEditMode: false
        })
        this.props.updateStatus(this.state.status)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        if (!this.props.profile) {
            return <PreLoader />
        }
        return (<div>
                {/*<div className={classes.mainPic}>*/}

                {/*</div>*/}
                <div className={classes.info}>
                    <img className={classes.avatar}
                         src={this.props.profile.photos.large || user}/>
                    <div className={classes.profileInfo}>
                        <div>{this.props.profile.fullName}</div>
                        {this.state.isEditMode ? <input onChange={this.changeStatus} autoFocus={true} onBlur={this.onBlur} value={this.state.status}/> :
                            <span onDoubleClick={this.isOnEditMode}>{this.props.status || '-------'}</span> }

                        <div onDoubleClick={this.isOnEditMode}>{this.props.profile.aboutMe}</div>

                        <div>
                            Looking for a job: {this.props.profile.lookingForAJob ?
                            <img className={classes.job} alt='' src={done}/> :
                            <img className={classes.job} alt='' src={undone}/>}
                        </div>
                        <div>
                            Contacts:
                            <div className={classes.contacts}>
                                <a href='#'>{this.props.profile.contacts.facebook}</a>
                                <a href='#'>{this.props.profile.contacts.vk}</a>
                                <a href='#'>{this.props.profile.contacts.twitter}</a>
                                <a href='#'>{this.props.profile.contacts.instagram}</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}


export default ProfileInfo;

