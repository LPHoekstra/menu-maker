import { ReactElement } from "react";
import m from "./index.module.scss";

interface HomeMenuCardProps {
    content: string
    number: 1 | 2 | 3
}

function HomeMenuCard({ content, number }: HomeMenuCardProps): ReactElement {
    const svg = ["1", "2", "3"]

    const numberShown = svg[number - 1]

    return (
        <div className={m.mainBorder}>
            <div className={m.contentWrapper}>
                <div className={m.contentWrapper__ellipse}></div>
                <p className={m.contentWrapper__content}>{content}</p>
                <span className={m.contentWrapper__number}>{numberShown}</span>
            </div>
        </div>
    )
}

export default HomeMenuCard