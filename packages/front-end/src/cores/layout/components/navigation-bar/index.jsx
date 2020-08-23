import React from 'react'
import {UserOutlined} from '@ant-design/icons'
import './navigation-bar.css'
import {connect} from 'react-redux'
import SignInComponent from '../../../authentication/components/sign-in'
import {openSidePanel} from '../../../display/actions/side-panel.actions'
import SignUpComponent from '../../../authentication/components/sign-up'

const mapDispatchToProps = dispatch => ({
    signIn: () => dispatch(openSidePanel('sign-in-form')),
    signUp: () => dispatch(openSidePanel('sign-up-form')),
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
                    <li id={'sign-in'} className={'navigation item button'} onClick={props.signIn}>
                        <UserOutlined className={'icon center'} />
                        <span>sign in</span>
                    </li>
                    <li id={'sign-up'} className={'navigation item button'} onClick={props.signUp}>
                        <UserOutlined className={'icon center'} />
                        <span>sign up</span>
                    </li>
                </ul>
            </nav>
            <SignInComponent />
            <SignUpComponent />
        </>
    )
}

export default connect(undefined, mapDispatchToProps)(NavigationBar)
