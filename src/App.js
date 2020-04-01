import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Profile from "./components/Profile.jsx";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <Profile />
        </div>
    );
}


export default App;
