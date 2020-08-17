import React from 'react'
import {connect} from "react-redux";
import {
    LOGGED_IN,
    OPEN_EDITOR,
    OPEN_SIGN_IN,
} from "../../constants/action-types";
import {Col, Layout, Menu, Row} from 'antd'
import {FormOutlined, UserOutlined} from '@ant-design/icons'
import {authenticate, getUser} from "../../services/auth.service";

const {Header} = Layout

const mapStateToProps = state => ({
    appName: state.appName,
    cards: state.cards,
    authenticating: state.authenticating,
    currentUser: state.currentUser,
})

const mapDispatchToProps = dispatch => ({
    openSignIn: () =>
        dispatch({type: OPEN_SIGN_IN}),
    openEditor: () =>
        dispatch({type: OPEN_EDITOR}),
    passThruSignIn: () => {
        authenticate('Parker29', 'abcde')
            .finally(() => {
                const user = getUser('Parker29')
                dispatch({type: LOGGED_IN, payload: {user}})
            })
    },
})

function AppHeader(props) {
    const authenticatedItems = (
        <Menu.Item key="addCard"
                   onClick={() => props.openEditor()}
                   icon={<FormOutlined/>}>
            add new post
        </Menu.Item>
    )
    const unauthenticatedItems = (
        <Menu.Item key="signIn"
                   onClick={props.passThruSignIn}
                   icon={<UserOutlined/>}>
            sign in
        </Menu.Item>
    )

    const menuItems = props.currentUser ? authenticatedItems : unauthenticatedItems

    return (
        <Header align={'right'}>
            <Row justify="end">
                <Col span={6}>
                    <Menu theme="dark" mode="horizontal">
                        {menuItems}
                    </Menu>

                </Col>
            </Row>
        </Header>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)