import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import PropTypes from 'prop-types';
import store from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav />
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile
                                                                   />} />
                    <Route path='/dialogs' render={() => <DialogsContainer
                                                                   />} />
                    {/*<Route path='/friends' render={() => <Friends state={props.state.friendsPage} />} />*/}

                    <Route path='/users' render={() => <UsersContainer />} />

                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;
