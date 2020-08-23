import React from 'react'
import {UserOutlined} from '@ant-design/icons'
import './navigation-bar.css'
import {connect} from 'react-redux'
import {LoginForm} from '../../authentication/login-form'
import {OPEN_MODAL} from '../../../reducers/display/display.commands'
import {fetchCard} from '../../../cores/card/actions/fetch-cards.action'

const mapDispatchToProps = dispatch => ({
    login: modalId => dispatch({type: OPEN_MODAL, payload: {modalId}}),
    fetchCard: () => dispatch(fetchCard()),
})

function NavigationBar(props) {
    return (
        <>
            <nav id={'navigation'}>
                <ul>
                    <li id={'user'} className={'navigation item'}>
                        <span className={'avatar icon center'} />
                        <span>alias</span>
                    </li>
                    <li id={'sign-in'} className={'navigation item button'} onClick={() => props.login('login-dialog')}>
                        <UserOutlined className={'icon center'} />
                        <span>sign in</span>
                    </li>
                    <li id={'fetch'} className={'navigation item button'} onClick={() => props.fetchCard()}>
                        <span>fetch cards</span>
                    </li>
                </ul>
            </nav>
            <LoginForm />
        </>
    )
}

export default connect(undefined, mapDispatchToProps)(NavigationBar)
