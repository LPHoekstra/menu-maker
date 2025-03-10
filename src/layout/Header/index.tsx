import { ReactElement } from "react";
import logo from "../../assets/logo.png";
import m from "./index.module.scss";

function Header(): ReactElement {
    return (
        <header className={m.header}>
            <img src={logo} alt="Menu Maker by Qwenta" />
            <nav>
                <ul>
                    <li>
                        <span>Exemples</span>
                    </li>
                    <li>
                        <a href="">Tarifs</a>
                    </li>
                    <li>
                        <span>Se Connecter</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header