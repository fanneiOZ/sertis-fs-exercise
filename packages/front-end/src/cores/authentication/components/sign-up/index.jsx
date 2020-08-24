import React, {useState} from 'react'
import SidePanel from '../../../../libs/display/components/side-panel'
import './sign-up.css'
import {TextBox} from '../../../../libs/form/components/text-box'
import {signUp} from '../../actions/sign-up.action'
import {connect} from 'react-redux'
import {closeSidePanel} from '../../../../libs/display/actions/side-panel.actions'

const mapDispatchToProps = dispatch => ({
    submitSignUp: (id, name, password) => dispatch(signUp({id, name, password})),
    close: id => dispatch(closeSidePanel(id)),
})

function SignUpComponent(props) {
    const id = 'sign-up-form'
    const [userId, setUserId] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const handleSubmit = e => {
        e.preventDefault()
        if (!userId || !name || !password) return

        props.submitSignUp(userId, name, password)
    }

    return (
        <>
            <SidePanel id={id}>
                <div id={id}>
                    <header>Sign up</header>
                    <article>
                        <form id={id} onSubmit={handleSubmit}>
                            <TextBox id={'name'} placeholder={'Your name'} hook={setName} />
                            <TextBox id={'userName'} placeholder={'Username'} hook={setUserId} />
                            <TextBox id={'password'} placeholder={'Password'} password hook={setPassword} />
                            <div style={{display: 'flex', alignContent: 'flex-end'}}>
                                <input type='button' value={'cancel'} onClick={e => props.close(id)} />
                                <input type='submit' value={'sign up'} />
                            </div>
                        </form>
                    </article>
                </div>
            </SidePanel>
        </>
    )
}

export default connect(undefined, mapDispatchToProps)(SignUpComponent)
