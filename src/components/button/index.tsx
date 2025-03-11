import { ReactElement } from "react";
import m from "./index.module.scss";

interface buttonProps {
    content: string
    type: "full" | "empty"
}

function Button({ content, type = "full" }: buttonProps): ReactElement {
    return (
        <button className={`
            ${m.button} 
            ${type === "full" ? m.button_full : m.button_empty}
        `}>
            {content}
        </button>
    )
}

export default Button