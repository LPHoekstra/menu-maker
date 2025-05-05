import { createContext, ReactElement, useState } from "react";
import { MenuData } from "../../@types/menu";

interface MenuDataProviderProps {
    children: ReactElement
}

interface MenuDataContextType {
    menuData: MenuData
    setMenuData: React.Dispatch<React.SetStateAction<MenuData>>
}

const defaultMenuData: MenuData = {
    style: {
        color: "#000",
        fontFamily: "\"Baskervville\", serif"
    },
    content: {}
}

// eslint-disable-next-line react-refresh/only-export-components
export const MenuDataContext = createContext<MenuDataContextType | undefined>(undefined)

export const MenuDataProvider = ({ children }: MenuDataProviderProps) => {
    const [menuData, setMenuData] = useState<MenuData>(defaultMenuData)

    return (
        <MenuDataContext.Provider value={{ menuData, setMenuData }}>
            {children}
        </MenuDataContext.Provider>
    )
}