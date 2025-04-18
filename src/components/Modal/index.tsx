import { MouseEventHandler, ReactElement } from "react";
import m from "./index.module.scss";

interface ModalProps {
    onMouseDown: MouseEventHandler<HTMLDivElement>
    children: ReactElement
}

function Modal({ onMouseDown, children }: ModalProps): ReactElement {
    return (
        <aside className={m.aside} onMouseDown={onMouseDown}>
            {children}
        </aside>
    )
}

export default Modal