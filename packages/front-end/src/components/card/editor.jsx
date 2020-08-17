import React from 'react'
import {Button, Form, Input, Modal} from 'antd'
import { CLOSE_EDITOR, FETCH_CARDS} from "../../constants/action-types";
import {connect} from "react-redux";
import {addCard} from "../../services/card.service";

const {TextArea} = Input;

const mapStateToProps = state => {
    return {
        editing: state.editing,
    }
}

const mapDispatchToProps = dispatch => ({
    addCard: (values) => {
        const {name, content, categoryName} = values

        addCard(name, content, categoryName).then(dispatch({type: FETCH_CARDS}))
    },
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
                onCancel={() => props.closeEditor()}
            >
                <Form name={'post'} onFinish={values => props.addCard(values)}>
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
                    <Form.Item>
                        <Button key="back" onClick={() => props.closeEditor()}>
                            Return
                        </Button>
                        <Button key="submit" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
