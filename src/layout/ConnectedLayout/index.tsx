import { ReactElement } from "react";
import { Link, Outlet } from "react-router";
import m from "./index.module.scss";
import logo from "../../assets/logo.png";

function ConnectedLayout(): ReactElement {
    return (
        <div className={m.layout}>
            <aside className={m.sidebar}>
                <header className={m.header}>
                    <img src={logo} alt="Menu Maker by Qwenta" />
                    <nav className={m.navbar}>
                        <ul>
                            <li>
                                <Link to="" className={`${m.navbar__link} ${m.navbar__link_selected}`}>Dashboard</Link>
                            </li>
                            <li>
                                <Link to="" className={m.navbar__link}>Mes menus</Link>
                            </li>
                            <li>
                                <Link to="" className={m.navbar__link}>Mon restaurant</Link>
                            </li>
                            <li>
                                <Link to="" className={m.navbar__link}>Mon compte</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
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