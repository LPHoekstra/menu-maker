import { ReactElement } from "react";
import { Link, Outlet, useLocation } from "react-router";
import m from "./index.module.scss";
import logo from "../../assets/logo.png";

interface navbarContent {
    to: string
    content: string
}

const navbarContent: Array<navbarContent> = [
    {
        to: "dashboard",
        content: "Dashboard"
    },
    {
        to: "",
        content: "Mes menus"
    },
    {
        to: "",
        content: "Mon restaurant"
    },
    {
        to: "",
        content: "Mon compte"
    }
]

function ConnectedLayout(): ReactElement {
    const location = useLocation()
    const pathname: string = location.pathname.split("/")[1]


    return (
        <div className={m.layout}>
            <aside className={m.sidebar}>
                <header className={m.header}>
                    <img src={logo} alt="Menu Maker by Qwenta" />
                    <nav className={m.navbar}>
                        <ul>
                            {navbarContent.map(list => (
                                <li key={list.content}>
                                    <Link to={list.to} className={`${m.navbar__link} ${pathname === list.to ? m.navbar__link_selected : ""}`}>
                                        {list.content}
                                    </Link>
                                </li>
                            ))}
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