import { ReactElement } from "react";
import { Outlet } from "react-router";
import m from "./index.module.scss";
import Header from "../Header";

function ConnectedLayout(): ReactElement {
    return (
        <div className={m.layout}>
            <aside className={m.sidebar}>
                <Header />
                <footer className={m.footer}>
                    <ul>
                        <li>Se déconnecter</li>
                        <li>Mentions  légales</li>
                        <li>Tous droits réservés</li>
                    </ul>
                </footer>
            </aside>
            <Outlet />
        </div>
    )
}

export default ConnectedLayout