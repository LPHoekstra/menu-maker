import { ReactElement } from "react";
import m from "./index.module.scss";
import { Link } from "react-router";

interface DashbaordCardMenuProps {
    content: string
    linkTo: string
}

function DashbaordCardMenu({ content, linkTo }: DashbaordCardMenuProps): ReactElement {
    return (
        <article className={m.article}>
            <Link to={linkTo} className={m.article__link}>
                <span className={m.article__content}>{content}</span>
            </Link>
        </article>
    )
}

export default DashbaordCardMenu