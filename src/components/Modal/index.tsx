import { ReactElement } from "react";
import m from "./index.module.scss";

interface ModalProps {
    children: ReactElement
}

function Modal({ children }: ModalProps): ReactElement {
    return (
        <aside className={m.aside}>
            {children}
        </aside>
    )
}

export default Modal