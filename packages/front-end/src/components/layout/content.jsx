import React from 'react'
import {connect} from "react-redux";
import {Layout} from 'antd'
import CardGrid from "../card/card-grid";

const {Content} = Layout

const mapStateToProps = state => ({
    cards: state.cards,
})

function AppContent(props) {
    return (
        <Layout style={{marginTop: '1em', paddingLeft: '2em', paddingRight: '2em'}}>
            <Content>
                <CardGrid list={props.cards}/>
            </Content>
        </Layout>
    )
}

export default connect(mapStateToProps)(AppContent)