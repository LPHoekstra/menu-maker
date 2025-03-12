import { ReactElement } from "react";
import m from "./index.module.scss";

function Loaders(): ReactElement {
    return (
        <div className={m.loadersWrapper}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loaders