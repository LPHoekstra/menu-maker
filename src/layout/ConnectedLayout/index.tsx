import { ReactElement } from "react";
import { Outlet } from "react-router";
import m from "./index.module.scss";
import Header from "../Header";
import Footer from "../Footer";

function ConnectedLayout(): ReactElement {
    return (
        <div className={m.layout}>
            <aside className={m.sidebar}>
                <Header />
                <Footer />
            </aside>
            <Outlet />
        </div>
    )
}

export default ConnectedLayout