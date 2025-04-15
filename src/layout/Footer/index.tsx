import { ReactElement } from "react";
import m from "./index.module.scss";
import { useLocation, useNavigate } from "react-router";
import apiUser from "../../api/apiUser";

function Footer(): ReactElement {
    const location = useLocation()
    const navigate = useNavigate()
    const pathname: string = location.pathname.split("/")[1]

    const handleDisconnection = async (): Promise<void> => {
        try {
            await apiUser.logout()
        } catch (error) {
            console.log(error)
        } finally {
            navigate("/")
        }
    }

    return (
        <footer className={pathname === "" ? m.footerHome : m.footerConnected}>
            <ul>
                {pathname === "" || <li onClick={handleDisconnection}>Se déconnecter</li>}
                <li>Mentions  légales</li>
                <li>Tous droits réservés</li>
            </ul>
        </footer>
    )
}

export default Footer