import { ReactElement } from "react";
import logo from "../../assets/logo.png";
import m from "./index.module.scss";
import { Link } from "react-router";

function Header(): ReactElement {
    return (
        <header className={m.header}>
            <img src={logo} alt="Menu Maker by Qwenta" className={m.header__logo} />
            <nav>
                <ul className={m.navbar}>
                    <li>
                        <a href="" className={m.navbar__text} data-text="Exemples">Exemples</a>
                    </li>
                    <li>
                        <a href="" className={m.navbar__text} data-text="Tarifs">Tarifs</a>
                    </li>
                    <li>
                        <Link to="login" className={m.navbar__text} data-text="Se Connecter">Se Connecter</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header