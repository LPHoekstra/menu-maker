import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./layout/Login";
import Dashboard from "./pages/Dashboard";
import ConnectedLayout from "./layout/ConnectedLayout";
import Menus from "./pages/Menus";
import MenusCreation from "./pages/MenusCreation";
import AddCategorie from "./pages/AddCategorie";
import MenuEdit from "./components/MenuEdit";
import MenusAddDishe from "./pages/MenusAddDishe";

function AppRoutes(): ReactElement {
    return (
        <Routes>
            <Route path="" element={<Home />}>
                <Route path="login" element={<Login />} />
            </Route>
            {/* connected route */}
            <Route element={<ConnectedLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="menus" element={<Menus />} />
                <Route path="menus/edition-de-menu" element={<MenusCreation />}>
                    <Route path="ajouter-une-categorie" element={<AddCategorie />} />
                    <Route path="ajouter-une-categorie/:name" element={<AddCategorie />} />
                    <Route path="ajouter-un-plat" element={<MenusAddDishe />} />
                    <Route path=":id" element={<MenuEdit />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes