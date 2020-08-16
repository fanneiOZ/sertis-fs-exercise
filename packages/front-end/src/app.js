import React from 'react'
import './components/card/style.css'
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        appLoaded: state.common.appLoaded,
        appName: state.common.appName,
        currentUser: state.common.currentUser,
    }}

export function App(props) {
    const appName = props.name ?? ''

    if (props.appLoaded) {
        return (
            <div id="app-container">
                <header>
                    <h2>H3LL0 {appName}</h2>
                </header>
                <Switch>
                    <Route exact path="/" />
                </Switch>
            </div>
        )
    }

    return (
        <div id="app-container">
            <header>
                <h2>H3LL0 {appName}</h2>
            </header>
        </div>
    )
}

export default connect(mapStateToProps)(App)