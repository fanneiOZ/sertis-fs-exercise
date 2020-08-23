import React from 'react'
import {connect} from 'react-redux'
import './header.css'
import {SnippetsFilled} from '@ant-design/icons'
import NavigationBar from '../navigation-bar'

function Header(props) {
    return (
        <header id={'app-header'}>
            <span style={{order: 1}}>
                <SnippetsFilled className={'icon center'} />
                <span>Untitled APP</span>
            </span>
            <NavigationBar />
        </header>
    )
}

export default connect()(Header)
