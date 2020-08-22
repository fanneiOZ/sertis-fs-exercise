import React, {useState} from "react";
import "./modal.css";
import {connect} from "react-redux";
import {CLOSE_MODAL} from "../../../reducers/display/display.commands";

const mapStateToProps = state => ({
    activeId: state.display.modal.activeId
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch({type: CLOSE_MODAL})
})

function Modal(props) {
    const {id, activeId, children, modalTriggered} = props;

    if (!activeId || id !== activeId) return (<></>)

    if (!id) throw Error('Modal component required its id')

    const [visible, toggle] = useState(props.visible);
    const displaying = visible ? "on" : "off";
    const content = children ? extractComponent("content", children) : undefined;
    const header = children ? extractComponent("header", children) : undefined;
    const footer = children ? extractComponent("footer", children) : undefined;

    return (
        <>
            <div id={"untitled-modal"} className={{displaying, modalTriggered}}>
                <header>{header}</header>
                <article>{content}</article>
                <footer>
                    {footer}
                    <nav>
                        <span id='ok-btn' onClick={() => props.closeModal()}/>
                    </nav>
                </footer>
            </div>
            <div
                id="untitled-backdrop"
                className={displaying}
                onClick={() => toggle(false)}
            />
        </>
    );
}

function extractComponent(componentType, children) {
    const component = Object.values(children)
        .filter(
            child => typeof child === "object" && child.hasOwnProperty("$$typeof")
        )
        .find(
            child =>
                child.props.hasOwnProperty("id") &&
                child.props.id === `modal-${componentType}`
        );

    const content = componentType === 'content' ? children : undefined

    return component ? <>{component}</> : content;
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)