import React from "react";
import {connect} from "react-redux";
import {
     followUser, getUsers,
    toggleFollowing,
     unfollowUser
} from "../../redux/usersReducer";
import Users from "./Users";
import PreLoader from "../Preloader/PreLoader";
import {compose} from "redux";
import {
    getAllUsers, getAllUsersSelector,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "./userSelectors";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (currentPage) => {

        this.props.getUsers(currentPage, this.props.pageSize)



    }


    render() {


        return <>
            {this.props.isFetching ? <PreLoader /> : null}
            <Users followingInProgress={this.props.followingInProgress} totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                   users={this.props.users} follow={this.props.followUser}
                   unFollow={this.props.unfollowUser} onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}/>
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: getAllUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}



export default compose(connect(mapStateToProps, {
     followUser,
     unfollowUser,
     toggleFollowing,
     getUsers
 }))(UsersContainer)

