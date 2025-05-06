import { CSSProperties, MouseEventHandler, ReactElement } from "react";
import m from "./index.module.scss";

interface buttonProps {
    content: string
    type: "full" | "empty"
    onClick?: MouseEventHandler
    additionnalClass?: CSSProperties
    isClickable?: boolean
}

function Button({ content, type = "full", onClick, additionnalClass, isClickable = true }: buttonProps): ReactElement {
    return (
        <button className=
            {`${m.button} ${type === "full" ? m.button_full : m.button_empty} ${additionnalClass ? additionnalClass : ""} ${isClickable ? "" : m.button_notClickable}`}
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default Button