import { ReactElement } from "react";
import m from "./index.module.scss";
import { Link } from "react-router";

interface GoingFurtherCardProps {
    content: string
    img: string
    linkTo: string
}

function GoingFurtherCard({ content, img, linkTo }: GoingFurtherCardProps): ReactElement {
    return (
        <article className={m.article}>
            <Link to={linkTo}>
                <img src={img} alt="" className={m.article__img} />
                <div className={m.titleWrapper}>
                    <p className={m.titleWrapper__content}>{content}</p>
                </div>
            </Link>
        </article>
    )
}

export default GoingFurtherCard