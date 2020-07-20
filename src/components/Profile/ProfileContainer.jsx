import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunk,
    getStatusThunk,
    updateStatusThunk
} from "../../redux/profileReducer";
import { withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.put('/login')

            }
        }



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



const mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth

})



export default compose(connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk}), withRouter, withAuthRedirect) (ProfileContainer);

