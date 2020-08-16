import React from 'react'
import {store} from "./store";
import {FETCH_CARDS} from "./constants/action-types";
import agent from "./agent";
import {fetchCards} from "./services/card.service";
import 'antd/dist/antd.css'
import {Layout} from 'antd'
import Editor from "./components/card/editor";
import LoginForm from "./components/authentication/login-form";
import AppHeader from "./components/layout/header";
import AppContent from "./components/layout/content";

export default function App(props) {
    const token = window.localStorage.getItem('jwt')
    if (token) {
        agent.setToken(token)
    }

    fetchCards('current').then(cards =>
        store.dispatch({type: FETCH_CARDS, payload: {cards}})
    )

    return (
        <>
            <Layout className="layout" style={{display: 'flex', padding: '0', height: '100%'}}>
                <AppHeader />
                <AppContent />
            </Layout>
            <Editor/>
            <LoginForm/>
        </>
    )
}