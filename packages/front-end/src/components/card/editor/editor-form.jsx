import React from 'react'
import {NameInput} from "./name-input";
import {ContentInput} from "./content-input";

export function CardEditorForm(props) {
    function handle(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={handle}>
            <ul>
                <NameInput />
                <ContentInput />
                <input className="cardEditor submit" type="submit" />
            </ul>
        </form>
    )
}