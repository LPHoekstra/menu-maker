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
            const response = await apiUser.logout()

            if (response.httpStatus === 301) navigate("/")
        } catch (error) {
            console.log(error)
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