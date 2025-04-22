import m from "./index.module.scss"
import MenuLinkAdd from "../MenuLinkAdd"
import { Link } from "react-router"

interface MenuCreatedCategoryProps {
    menuName: string
}

function MenuCreatedCategory({ menuName }: MenuCreatedCategoryProps) {
    return (
        <div className={m.addedCategoriesWrapper}>
            <div className={m.addedCategoriesWrapper__titleWrapper}>
                <h4>{menuName}</h4>
                <Link to={`ajouter-une-categorie/${menuName}`} className={m.addedCategoriesWrapper__modification}>modifier</Link>
            </div>
            <MenuLinkAdd to="ajouter-un-plat" content="Plats (ex. : pâtes, gryros, coca...)" />
        </div>
    )
}

export default MenuCreatedCategory