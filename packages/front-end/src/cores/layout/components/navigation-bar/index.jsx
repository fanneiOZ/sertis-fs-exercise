import React from 'react'
import {UserOutlined} from '@ant-design/icons'
import './navigation-bar.css'
import {connect} from 'react-redux'
import {LoginForm} from '../../../authentication/components/login'
import {OPEN_MODAL} from '../../../display/constants/commands'
import {fetchCards} from '../../../card/actions/fetch-cards.action'

const mapDispatchToProps = dispatch => ({
    login: modalId => dispatch({type: OPEN_MODAL, payload: {modalId}}),
    fetchCard: () => dispatch(fetchCards()),
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
