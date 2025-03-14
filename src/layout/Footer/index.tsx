import { ReactElement } from "react";
import m from "./index.module.scss";
import { useLocation } from "react-router";

function Footer(): ReactElement {
    const location = useLocation()
    const pathname: string = location.pathname.split("/")[1]

    return (
        <footer className={pathname === "" ? m.footerHome : m.footerConnected}>
            <ul>
                {pathname === "" || <li>Se déconnecter</li>}
                <li>Mentions  légales</li>
                <li>Tous droits réservés</li>
            </ul>
        </footer>
    )
}

export default Footer