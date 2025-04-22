import m from "./index.module.scss"
import MenuLinkAdd from "../MenuLinkAdd"
import { Link } from "react-router"
import close from "../../assets/close-dark.svg"
import { MouseEventHandler } from "react"
import { useMenuData } from "../../hooks/menuData"
import { MenuData } from "../../@types/menu"

interface MenuCreatedCategoryProps {
    menuName: string
}

function MenuCreatedCategory({ menuName }: MenuCreatedCategoryProps) {
    const { menuData, setMenuData } = useMenuData()

    const handleDelete: MouseEventHandler<HTMLImageElement> = () => {
        const filteredData: MenuData = Object.fromEntries(
            Object.entries(menuData).filter(([key]) => key !== menuName)
        )

        setMenuData({ ...filteredData })
    }

    return (
        <div className={m.mainWrapper}>
            <div className={m.mainWrapper__titleWrapper}>
                <h4>{menuName}</h4>
                <Link to={`ajouter-une-categorie/${menuName}`} className={m.mainWrapper__modification}>modifier</Link>
                <img src={close} alt="Supprimer le menu" className={m.mainWrapper__close} onClick={handleDelete} />
            </div>
            <MenuLinkAdd to={`ajouter-un-plat/${menuName}`} content="Plats (ex. : pâtes, gryros, coca...)" />
        </div>
    )
}

export default MenuCreatedCategory