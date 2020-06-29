import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Header/Login";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Nav />
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer
                                                                   />} />
                    <Route path='/dialogs' render={() => <DialogsContainer
                                                                   />} />
                    {/*<Route path='/friends' render={() => <Friends state={props.state.friendsPage} />} />*/}

                    <Route path='/users' render={() => <UsersContainer />} />

                    <Route path='/login' render={() => <Login />} />

                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;
