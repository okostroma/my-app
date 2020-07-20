import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Header/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialise} from "./redux/appReducer";
import PreLoader from "./components/Preloader/PreLoader";

class App extends React.Component {
    componentDidMount() {

        this.props.initialise()
    }

    render() {
        if(!this.props.initialised) {
            return <PreLoader/>
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Route path='/profile/:userId?' render={() => <ProfileContainer
                        />}/>
                        <Route path='/dialogs' render={() => <DialogsContainer
                        />}/>
                        {/*<Route path='/friends' render={() => <Friends state={props.state.friendsPage} />} />*/}

                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/login' render={() => <Login/>}/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialised: state.appReducer.initialized
    }
}

export default compose(withRouter, connect(mapStateToProps, {initialise})) (App);
