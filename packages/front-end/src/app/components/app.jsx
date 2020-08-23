import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import CardGrid from '../../cores/card/components/grid'
import '../../cores/layout/components/layout.css'
import Header from '../../cores/layout/components/header'
import {fetchCards} from '../../cores/card/actions/fetch-cards.action'

const mapStateToProps = state => ({
    app: state.app,
})

const mapDispatchToProps = dispatch => ({
    fetchCards: () => dispatch(fetchCards()),
})

function App(props) {
    document.title = props.app.appName

    props.fetchCards()

    return (
        <div id={'app'}>
            <Header style={{order: 1}} />
            <CardGrid style={{order: 2}} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
