import { useContext } from "react"
import { MenuDataContext } from "../../context/menuData"

export const useMenuData = () => {
    const context = useContext(MenuDataContext)
    if (!context) {
        throw new Error("useMenuData must be used within the provider")
    }

    const menuData = context.menuData
    const setMenuData = context.setMenuData

    return { menuData, setMenuData }
}