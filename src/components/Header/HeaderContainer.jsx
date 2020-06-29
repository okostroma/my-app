import React from "react";
import './Header.module.css';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {isOnAuth, setAuthUserData} from "../../redux/authReducer";
import {usersAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        // usersAPI.getAuthData().then(data => {
        //
        //     if(data.resultCode === 0) {
        //         let {id, email, login} = data.data
        //         this.props.setAuthUserData(id, email, login)
        //     }
        //
        // })

        this.props.isOnAuth()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login

    }
}


export default connect(mapStateToProps, {isOnAuth})(HeaderContainer);

