import m from "./index.module.scss"
import MenuLinkAdd from "../MenuLinkAdd"
import { Link } from "react-router"
import close from "../../assets/close-dark.svg"
import { MouseEventHandler, useMemo } from "react"
import { useMenuData } from "../../hooks/menuData"
import { MenuContent } from "../../@types/menu"
import modify from "../../assets/modify-dishe.svg"

interface MenuCreatedCategoryProps {
    createdCategoryName: string
}

function MenuCreatedCategory({ createdCategoryName }: MenuCreatedCategoryProps) {
    const { menuData, setMenuData } = useMenuData()

    const handleDeleteCategory: MouseEventHandler<HTMLImageElement> = () => {
        const filteredData: MenuContent = Object.fromEntries(
            Object.entries(menuData.content).filter(([key]) => key !== createdCategoryName)
        )

        setMenuData((prev) => ({
            ...prev,
            content: { ...filteredData }
        }))
    }

    const handleDeleteDishe = (nameToDelete: string) => {
        const filteredData: MenuContent = {
            ...menuData.content,
            [createdCategoryName]: menuData.content[createdCategoryName].filter((object) => object.name !== nameToDelete)
        }

        setMenuData((prev) => ({
            ...prev,
            content: filteredData
        }))
    }

    const menuContent: MenuContent | null = useMemo(() => {
        const isEmpty = Object.keys(menuData.content).length === 0
        if (isEmpty) {
            return null
        }

        return menuData.content
    }, [menuData.content])

    return (
        <div className={m.mainWrapper}>
            <div className={m.mainWrapper__titleWrapper}>
                <h4>{createdCategoryName}</h4>
                <Link to={`ajouter-une-categorie/${createdCategoryName}`} className={m.mainWrapper__modification}>modifier</Link>
                <img src={close} alt="Supprimer le menu" className={m.mainWrapper__close} onClick={handleDeleteCategory} />
            </div>
            {menuContent && menuContent[createdCategoryName].map(({ name }, index) => (
                <div key={`${name}-${index}`} className={m.disheWrapper}>
                    <p className={m.disheWrapper__name}>{name}</p>
                    <Link to={`ajouter-un-plat/${createdCategoryName}/${name}`}>
                        <img src={modify} alt="Modifier le plat" className={m.disheWrapper__img} />
                    </Link>
                    <img src={close} alt="Supprimer le plat" className={m.mainWrapper__close} onClick={() => handleDeleteDishe(name)} />
                </div>
            ))}
            <MenuLinkAdd to={`ajouter-un-plat/${createdCategoryName}`} content="Plats (ex. : pâtes, gryros, coca...)" />
        </div>
    )
}

export default MenuCreatedCategory