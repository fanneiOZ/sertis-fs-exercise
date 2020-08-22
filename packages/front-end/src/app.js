import React from 'react'
import agent from "./agent";
import {connect} from "react-redux";
import CardGrid from "./components/card/grid";
import './components/layout/layout.css'
import Header from "./components/layout/header/index";

const mapStateToProps = state => ({
    app: state.app
})

function App(props) {
    const token = window.localStorage.getItem('jwt')
    if (token) {
        agent.setToken(token)
    }

    return (
        <div id={'app'}>
            <Header style={{order: 1}}/>
            <CardGrid style={{order: 2}}/>
        </div>
    )
}

export default connect(mapStateToProps)(App)