import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunk,
    getStatusThunk,
    setUserProfileActionCreator,
    updateStatusThunk
} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8278;
        }
        // profileAPI.getProfile(userId).then(data => {
        //     this.props.setUserProfileActionCreator(data)
        // })

        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId)
    }

    render() {


        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunk}/>

            </div>
        );
    }
}


// const mapStateToPropsRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// })
//
//
//
// AuthRedirectComponent = connect(mapStateToPropsRedirect) (AuthRedirectComponent)


const mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status

})

//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
// let withURLContainerComponent =  withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk}), withRouter, withAuthRedirect) (ProfileContainer);

