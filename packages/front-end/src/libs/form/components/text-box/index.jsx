import React from 'react'
import './text-box.css'
import {requiredId} from '../../../display/helpers/validation'

export function TextBox(props) {
    const {id, password, placeholder, hook} = props
    requiredId(id)

    const inputType = password ? 'password' : 'text'

    function handleChange(e) {
        e.preventDefault()
        hook(e.target.value)
    }

    return <input type={inputType} id={id} className='text-box' placeholder={placeholder} onChange={handleChange} />
}
