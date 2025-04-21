import { Link, useNavigate } from "react-router"
import Modal from "../../components/Modal"
import close from "../../assets/close.svg"
import Button from "../../components/Button"
import m from "./index.module.scss"
import { FormEvent, FormEventHandler } from "react"
import { useMenuData } from "../../hooks/menuData"
import { MenuData } from "../../@types/menu"

function AddCategorie() {
    const navigate = useNavigate()
    const { menuData, setMenuData } = useMenuData()

    const closeModal = () => {
        navigate("/menus/edition-de-menu")
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const input = form.elements.namedItem("addCategorie") as HTMLInputElement

        const newCategory: MenuData = {
            [input.value]: []
        }

        setMenuData({ ...menuData, ...newCategory })

        navigate("/menus/edition-de-menu")
    }

    return (
        <Modal onMouseDown={closeModal}>
            <form onSubmit={handleSubmit} className={m.mainWrapper} onMouseDown={(e) => e.stopPropagation()}>
                <Link to="/menus/edition-de-menu" className={m.mainWrapper__close}>
                    <img src={close} alt="Fermer la modal" />
                </Link>
                <h2 className={m.mainWrapper__title}>Ajouter une catégorie</h2>
                <div className={m.inputWrapper}>
                    <label htmlFor="addCategorie">Nom de la catégorie</label>
                    <input type="text" name="addCategorie" id="addCategorie" className={m.inputWrapper__input} />
                </div>
                <Button content="Valider" type="empty" additionnalClass={m.mainWrapper__button} />
            </form>
        </Modal>
    )
}

export default AddCategorie