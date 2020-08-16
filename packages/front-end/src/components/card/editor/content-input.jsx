import React from "react";

export function ContentInput(props) {
    const content = props.content ?? ''

    return (
        <div className="cardEditor content">
            <textarea defaultValue={content}></textarea>
        </div>
    )
}