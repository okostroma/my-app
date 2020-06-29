import React from "react";
import {connect} from "react-redux";
import {
    follow, followUser, getUsers,
    toggleFollowing,
    unFollow, unfollowUser
} from "../../redux/usersReducer";
import Users from "./Users";
import PreLoader from "../Preloader/PreLoader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }

    onPageChanged = (currentPage) => {

        // this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize)


        // this.props.toggleFetching(true);
        // usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleFetching(false)
        //     this.props.setUsers(data.items)
        //
        // })
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
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress

    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         setToggleFetching: (isFetching)=> {
//             dispatch(toggleFetchingAC(isFetching))
//         }
//     }
//
// }



// export default withAuthRedirect(connect(mapStateToProps, {
//     followUser,
//     unfollowUser,
//     getUsers
//     toggleFollowing,
// })(UsersContainer));

export default compose(withAuthRedirect, connect(mapStateToProps, {
     followUser,
     unfollowUser,
     toggleFollowing,
     getUsers
 }))(UsersContainer)

