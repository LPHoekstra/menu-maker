import { ReactElement } from "react";
import logo from "../../assets/logo.png";
import m from "./index.module.scss";
import { Link, useLocation } from "react-router";

interface navbarConnectedContent {
    to: string
    content: string
}

const navbarConnectedContent: Array<navbarConnectedContent> = [
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

interface navbarHomeContent {
    to: string
    content: string
}

const navbarHomeContent: Array<navbarHomeContent> = [
    {
        to: "",
        content: "Exemples"
    },
    {
        to: "",
        content: "Tarifs"
    },
    {
        to: "login",
        content: "Se Connecter"
    }
]

function Header(): ReactElement {
    const location = useLocation()
    const pathname: string = location.pathname.split("/")[1]

    const navbarContent = pathname === "" ? navbarHomeContent : navbarConnectedContent

    return (
        <header className={pathname === "" ? m.headerHome : m.headerConnected}>
            <img src={logo} alt="Menu Maker by Qwenta" className={m.logo} />
            <nav className={pathname === "" ? m.navbarHome : m.navbarConnected}>
                <ul>
                    {navbarContent.map(list => (
                        <li key={list.content}>
                            <Link to={list.to} className={
                                pathname === "" ?
                                    m.navbarHome__link
                                    :
                                    `${m.navbarConnected__link} ${pathname === list.to
                                        ? m.navbarConnected__link_selected : ""
                                    }`
                            }
                                data-text={list.content}>
                                {list.content}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header