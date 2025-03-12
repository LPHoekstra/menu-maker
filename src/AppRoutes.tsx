import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./layout/Login";

function AppRoutes(): ReactElement {
    return (
        <Routes>
            <Route path="" element={<Home />}>
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes