import { CSSProperties, MouseEventHandler, ReactElement } from "react";
import m from "./index.module.scss";

interface buttonProps {
    content: string
    type: "full" | "empty"
    onClick?: MouseEventHandler
    additionnalClass?: CSSProperties
}

function Button({ content, type = "full", onClick, additionnalClass }: buttonProps): ReactElement {
    return (
        <button className=
            {`${m.button} ${type === "full" ? m.button_full : m.button_empty} ${additionnalClass ? additionnalClass : ""}`}
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default Button