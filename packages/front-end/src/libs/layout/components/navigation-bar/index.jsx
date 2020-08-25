import React from 'react'
import {UserOutlined, AppstoreAddOutlined, SolutionOutlined} from '@ant-design/icons'
import './navigation-bar.css'
import {connect} from 'react-redux'
import {openSidePanel} from '../../../display/actions/side-panel.actions'
import {openDialog} from '../../../display/actions/dialog.actions'

const mapStateToProps = state => ({
    currentUser: state.authentication.currentUser,
})

const mapDispatchToProps = dispatch => ({
    signIn: () => dispatch(openSidePanel('sign-in-form')),
    signUp: () => dispatch(openSidePanel('sign-up-form')),
    addNewCard: () => dispatch(openDialog('add-new-card')),
})

function NavigationBar(props) {
    const userMenu = props.currentUser ? (
        <>
            <li id={'add-card'} className={'navigation item button'} onClick={props.addNewCard}>
                <AppstoreAddOutlined className={'icon center'} />
                <span>add new card</span>
            </li>
            <li id={'user'} className={'navigation item'}>
                <SolutionOutlined className={'icon center'} />
                <span>{props.currentUser.name}</span>
            </li>
        </>
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
        </>
    )
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(NavigationBar))
