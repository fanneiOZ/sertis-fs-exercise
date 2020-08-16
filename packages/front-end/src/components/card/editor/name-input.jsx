import React from "react";

export function NameInput(props) {
    const title = props.title ?? ''
    return (
        <div className="cardEditor title">
            <input className="cardEditor title" type="text" value={title}/>
        </div>
    )
}