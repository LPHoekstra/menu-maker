import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./layout/Login";
import Dashboard from "./pages/Dashboard";
import ConnectedLayout from "./layout/ConnectedLayout";

function AppRoutes(): ReactElement {
    return (
        <Routes>
            <Route path="" element={<Home />}>
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="dashboard" element={<ConnectedLayout />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes