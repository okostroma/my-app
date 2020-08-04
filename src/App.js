import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav.jsx";
import { HashRouter, Route, withRouter} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Header/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialise} from "./redux/appReducer";
import PreLoader from "./components/Preloader/PreLoader";
import store from "./redux/redux-store";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {

        this.props.initialise()
    }

    render() {
        if (!this.props.initialised) {
            return <PreLoader/>
        }

        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => {
                        return <React.Suspense fallback={<PreLoader/>}><ProfileContainer/></React.Suspense>
                    }}/>
                    <Route path='/dialogs' render={() => {
                        return <React.Suspense fallback={<PreLoader/>}><DialogsContainer/></React.Suspense>}}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>

                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialised: state.appReducer.initialized
    }
}

const AppContainer = compose(withRouter, connect(mapStateToProps, {initialise}))(App);

const MainApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainApp;