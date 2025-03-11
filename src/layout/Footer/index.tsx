import { ReactElement } from "react";
import m from "./index.module.scss";

function Footer(): ReactElement {
    return (
        <footer className={m.footer}>
            <span>Tous droits résevés</span>
            <span>Mentions légales</span>
        </footer>
    )
}

export default Footer