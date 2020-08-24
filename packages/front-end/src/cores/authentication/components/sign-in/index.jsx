import React, {useState} from 'react'
import './sign-in.css'
import {closeSidePanel} from '../../../../libs/display/actions/side-panel.actions'
import SidePanel from '../../../../libs/display/components/side-panel'
import {TextBox} from '../../../../libs/form/components/text-box'
import {connect} from 'react-redux'
import {signIn} from '../../actions/sign-in.action'

const mapDispatchToProps = dispatch => ({
    submitSignIn: (id, password) => dispatch(signIn({id, password})),
    close: id => dispatch(closeSidePanel(id)),
})

function SignInComponent(props) {
    const id = 'sign-in-form'
    const [userId, setUserId] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const handleSubmit = e => {
        e.preventDefault()
        if (!userId || !password) return

        props.submitSignIn(userId, password)
    }

    return (
        <>
            <SidePanel id={id}>
                <div id={id}>
                    <header>Sign in</header>
                    <article>
                        <form id={id} onSubmit={handleSubmit}>
                            <TextBox id={'userName'} placeholder={'Username'} hook={setUserId} />
                            <TextBox id={'password'} placeholder={'Password'} password hook={setPassword} />
                            <div style={{display: 'flex', alignContent: 'flex-end'}}>
                                <input type='button' value={'cancel'} onClick={e => props.close(id)} />
                                <input type='submit' value={'sign in'} />
                            </div>
                        </form>
                    </article>
                </div>
            </SidePanel>
        </>
    )
}

export default connect(undefined, mapDispatchToProps)(SignInComponent)
