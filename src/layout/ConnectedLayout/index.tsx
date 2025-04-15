import { ReactElement, useState } from "react";
import { Navigate, Outlet } from "react-router";
import m from "./index.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import { getCookie } from "../../utils/function";

function ConnectedLayout(): ReactElement {
    const [isConnected, setIsConnected] = useState<boolean>(false)

    const cookie: string | undefined = getCookie("isConnected")
    if (cookie && !isConnected) {
        setIsConnected(true)
    }

    return isConnected ? (
        <div className={m.layout}>
            <aside className={m.sidebar}>
                <Header />
                <Footer />
            </aside>
            <Outlet />
        </div>
    )
        :
        (
            <Navigate to="/" />
        )
}

export default ConnectedLayout