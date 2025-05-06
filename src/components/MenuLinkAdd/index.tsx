import { Link } from "react-router"
import addCross from "../../assets/add-cross.svg"
import m from "./index.module.scss"

interface MenuLinkAddProps {
    to: "ajouter-une-categorie" | `ajouter-un-plat/${string}`
    content: "Catégorie (ex. : entrées, plats...)" | "Plats (ex. : pâtes, gryros, coca...)"
}

/**
 * used for opening the modal to add a category or some dishes
 * @param param0 
 * @returns 
 */
function MenuLinkAdd({ to, content }: MenuLinkAddProps) {
    const isAddSpaceForDishe = to !== "ajouter-une-categorie" ? true : false

    return (
        <Link to={to} className={`${m.link} ${isAddSpaceForDishe ? m.link_space : ""}`}>
            <img src={addCross} className={m.link__addCross} />
            {content}
        </Link>
    )
}

export default MenuLinkAdd