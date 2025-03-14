import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./layout/Login";
import Dashboard from "./pages/Dashboard";
import ConnectedLayout from "./layout/ConnectedLayout";
import Menus from "./pages/Menus";

function AppRoutes(): ReactElement {
    return (
        <Routes>
            <Route path="" element={<Home />}>
                <Route path="login" element={<Login />} />
            </Route>
            <Route element={<ConnectedLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="menus" element={<Menus />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes