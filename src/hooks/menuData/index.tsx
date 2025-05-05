import { useContext } from "react"
import { MenuDataContext } from "../../context/menuData"

export const useMenuData = () => {
    const context = useContext(MenuDataContext)
    if (!context) {
        throw new Error("useMenuData must be used within the provider")
    }

    const menuData = context.menuData
    const setMenuData = context.setMenuData

    // update the menuData in localStorage on each change
    const isEmpty = Object.keys(menuData.content).length === 0
    if (!isEmpty) {
        localStorage.setItem("menuData", JSON.stringify(menuData))
    }

    return { menuData, setMenuData }
}