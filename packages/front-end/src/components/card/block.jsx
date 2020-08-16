import React from 'react'
import {Card, Typography, Avatar, Comment} from 'antd'
import {EditTwoTone, DeleteTwoTone, UserOutlined} from '@ant-design/icons'

const {Paragraph} = Typography

export default function CardBlock(props) {
    const {cardInfo, editable} = props
    const {id, name, content, author} = cardInfo

    const actions = [
        <EditTwoTone key='edit'/>,
        <DeleteTwoTone key='delete'/>
    ]

    const allowedActions = editable ? actions : []
    const avatar = (
        <Avatar style={{backgroundColor: '#87d068'}} size="small" icon={<UserOutlined/>}/>)

    return (
        <>
            <Card key={id} title={name} extra={allowedActions}>
                <Paragraph ellipsis={{rows: 2, expandable: true}}>
                    {content}
                </Paragraph>
                <Comment author={author.name} avatar={avatar}/>
            </Card>
        </>
    )
}
