import React from 'react'
import {UserOutlined} from '@ant-design/icons'
import './navigation-bar.css'
import {connect} from 'react-redux'
import {LoginForm} from '../../../authentication/components/login'
import {openDialog} from '../../../display/actions/dialog.actions'
import {openSidePanel} from '../../../display/actions/side-panel.actions'
import SignUpComponent from '../../../authentication/components/sign-up'

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(openDialog('login-dialog')),
    signup: () => dispatch(openSidePanel('sign-up-form')),
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
                    <li id={'sign-in'} className={'navigation item button'} onClick={() => props.login()}>
                        <UserOutlined className={'icon center'} />
                        <span>sign in</span>
                    </li>
                    <li id={'sign-up'} className={'navigation item button'} onClick={() => props.signup()}>
                        <UserOutlined className={'icon center'} />
                        <span>sign up</span>
                    </li>
                </ul>
            </nav>
            <LoginForm />
            <SignUpComponent />
        </>
    )
}

export default connect(undefined, mapDispatchToProps)(NavigationBar)
