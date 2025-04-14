import { ReactElement, useState } from "react";
import { Navigate, Outlet } from "react-router";
import m from "./index.module.scss";
import Header from "../Header";
import Footer from "../Footer";

function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
        const lastParts = parts.pop()
        if (lastParts) return lastParts.split(";").shift()
    }
    return undefined
}

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