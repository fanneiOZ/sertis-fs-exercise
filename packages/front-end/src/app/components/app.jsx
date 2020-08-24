import React from 'react'
import {connect} from 'react-redux'
import CardGrid from '../../cores/card/components/grid'
import '../../libs/layout/components/layout.css'
import Header from '../../libs/layout/components/header'
import {fetchCards} from '../../cores/card/actions/fetch-cards.action'
import {authorizeUser} from '../../cores/authentication/actions/authorize-user.action'
import SignInComponent from '../../cores/authentication/components/sign-in'
import SignUpComponent from '../../cores/authentication/components/sign-up'
import AddCardComponent from "../../cores/card/components/add-card/add-card";

const mapStateToProps = state => ({
    app: state.app,
})

const mapDispatchToProps = dispatch => ({
    fetchCards: () => dispatch(fetchCards()),
    authorizeUser: token => dispatch(authorizeUser(token)),
})

function App(props) {
    document.title = props.app.appName

    const token = window.localStorage.getItem('jwt')
    if (token) {
        props.authorizeUser(token)
    }

    props.fetchCards()

    return (
        <div id={'app'}>
            <Header style={{order: 1}} />
            <CardGrid style={{order: 2}} />
            <SignInComponent />
            <SignUpComponent />
            <AddCardComponent />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
