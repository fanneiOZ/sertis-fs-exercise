import React, {useEffect} from 'react'
import agent from './agent'
import {connect} from 'react-redux'
import CardGrid from './cores/card/components/grid'
import './components/layout/layout.css'
import Header from './components/layout/header/index'

const mapStateToProps = state => ({
    app: state.app,
})

const mapDispatchToProps = dispatch => ({
    fetchCards: () => dispatch({}),
})

function App(props) {
    const token = window.localStorage.getItem('jwt')
    if (token) {
        agent.setToken(token)
    }

    useEffect(() => {})

    return (
        <div id={'app'}>
            <Header style={{order: 1}} />
            <CardGrid style={{order: 2}} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps())(App)
