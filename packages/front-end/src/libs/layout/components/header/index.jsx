import React from 'react'
import {connect} from 'react-redux'
import './header.css'
import NavigationBar from '../navigation-bar'

function Header(props) {
    return (
        <header id={'app-header'}>
            <span id={'app-title'}>
                <span id={'app-logo'} />
                <span id={'app-name'}>Untitled APP</span>
            </span>
            <NavigationBar />
        </header>
    )
}

export default connect()(Header)
