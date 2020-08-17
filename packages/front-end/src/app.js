import React from 'react'
import agent from "./agent";
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