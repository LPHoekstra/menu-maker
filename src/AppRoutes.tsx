import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./layout/Login";
import IsConnected from "./components/IsConnected";
import DashBoard from "./pages/DashBoard";

function AppRoutes(): ReactElement {
    return (
        <Routes>
            <Route path="" element={<Home />}>
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="dashboard" element={<IsConnected />}>
                <Route index element={<DashBoard />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes