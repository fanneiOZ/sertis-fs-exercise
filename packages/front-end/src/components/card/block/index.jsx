import React from 'react'
import './block.css'
import {connect} from "react-redux";
import {MessageTwoTone} from '@ant-design/icons'

const mapDispatchToProps = dispatch => ({})

function CardBlock(props) {
    const {data} = props

    return (
        <div className={'card-block'}>
            <header>
                <h3 className={'title'}>
                    <MessageTwoTone style={{marginRight: '0.2em'}}/>
                    {data.name}
                </h3>
            </header>
            <article>
                {data.content}
            </article>
            <footer>
                <nav>
                    {data.footer}
                </nav>
            </footer>
        </div>
    )
}

export default connect(undefined, mapDispatchToProps)(CardBlock)