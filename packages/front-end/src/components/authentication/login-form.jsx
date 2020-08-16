import React from 'react'
import {Button, Form, Input, Modal} from 'antd'
import {CLOSE_SIGN_IN} from "../../constants/action-types";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    authenticating: state.authenticating,
})

const mapDispatchToProps = dispatch => ({
    closeSignIn: () => dispatch({type: CLOSE_SIGN_IN}),
    authenticate: () => ({}),
})

function LoginForm(props) {
    return (
        <>
            <Modal
                key="login"
                visible={props.authenticating}
                title="Sign in"
                onOk={() => props.authenticate()}
                onCancel={() => props.closeSignIn()}
                footer={[
                    <Button key="closeSignIn" onClick={() => props.closeSignIn()}>
                        Return
                    </Button>,
                    <Button key="submitSignIn" type="primary" onClick={() => props.authenticate()}>
                        Submit
                    </Button>,
                ]}
            >
                <p>
                    <Form name={'login'}>
                        <Form.Item
                            label="Username"
                            name="userName"
                            rules={[{required: true, message: 'Please input user name'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{required: true, message: 'Please input password'}]}
                        >
                            <Input.Password allowClear/>
                        </Form.Item>
                    </Form>
                </p>
            </Modal>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)