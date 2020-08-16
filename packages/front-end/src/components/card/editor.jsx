import React from 'react'
import {Button, Form, Input, Modal} from 'antd'
import {ADD_CARD, CLOSE_EDITOR} from "../../constants/action-types";
import {connect} from "react-redux";

const {TextArea} = Input;

const mapStateToProps = state => {
    return {
        editing: state.editing,
    }
}

const mapDispatchToProps = dispatch => ({
    addCard: () =>
        dispatch({type: ADD_CARD}),
    closeEditor:
        () => dispatch({type: CLOSE_EDITOR}),
})

function Editor(props) {
    return (
        <>
            <Modal
                key="editor"
                visible={props.editing}
                title="Edit post"
                onOk={() => props.addCard()}
                onCancel={() => props.closeEditor()}
                footer={[
                    <Button key="back" onClick={() => props.closeEditor()}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" onClick={() => props.addCard()}>
                        Submit
                    </Button>,
                ]}
            >
                <p>
                    <Form name={'post'}>
                        <Form.Item
                            name="cardName"
                            rules={[{required: true, message: 'Please add blog title'}]}
                        >
                            <Input placeholder="What's your taught today?"/>
                        </Form.Item>
                        <Form.Item
                            name="category"
                            rules={[{required: true, message: 'Please add category'}]}
                        >
                            <Input placeholder="What's the category?"/>
                        </Form.Item>
                        <Form.Item
                            name="content"
                            rules={[{required: true, message: 'Please add some content'}]}
                        >
                            <TextArea placeholder="Jot something here..." allowClear/>
                        </Form.Item>
                    </Form>
                </p>
            </Modal>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)