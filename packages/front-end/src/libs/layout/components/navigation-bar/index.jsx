import React from 'react'
import {UserOutlined} from '@ant-design/icons'
import './navigation-bar.css'
import {connect} from 'react-redux'
import SignInComponent from '../../../../cores/authentication/components/sign-in'
import {openSidePanel} from '../../../display/actions/side-panel.actions'
import SignUpComponent from '../../../../cores/authentication/components/sign-up'

const mapStateToProps = state => ({
    currentUser: state.authentication.currentUser,
})

const mapDispatchToProps = dispatch => ({
    signIn: () => dispatch(openSidePanel('sign-in-form')),
    signUp: () => dispatch(openSidePanel('sign-up-form')),
})

function NavigationBar(props) {
    const userMenu = props.currentUser ? (
        <li id={'user'} className={'navigation item'}>
            <span className={'avatar icon center'} />
            <span>{props.currentUser.name}</span>
        </li>
    ) : (
        <>
            <li id={'sign-in'} className={'navigation item button'} onClick={props.signIn}>
                <UserOutlined className={'icon center'} />
                <span>sign in</span>
            </li>
            <li id={'sign-up'} className={'navigation item button'} onClick={props.signUp}>
                <UserOutlined className={'icon center'} />
                <span>sign up</span>
            </li>
        </>
    )

    return (
        <>
            <nav id={'navigation'}>
                <ul>{userMenu}</ul>
            </nav>
            <SignInComponent />
            <SignUpComponent />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
