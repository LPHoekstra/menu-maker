import { Link, useNavigate, useParams } from "react-router"
import Modal from "../../components/Modal"
import m from "./index.module.scss"
import { FormEvent } from "react"
import close from "../../assets/close-dark.svg"
import addPhoto from "../../assets/add-photo.svg"
import Button from "../../components/Button"
import { MenuData, MenuDishes } from "../../@types/menu"
import { useMenuData } from "../../hooks/menuData"

function MenusAddDishe() {
    const navigate = useNavigate()
    const { menuData, setMenuData } = useMenuData()
    const param = useParams()
    const categoryNameInPath = param.categoryName as string // component is not render if no param
    // implement img visualisation of the uploaded photo

    const closeModal = () => {
        navigate("/menus/edition-de-menu")
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const imgInput = form.elements.namedItem("img") as HTMLInputElement
        const nameInput = form.elements.namedItem("name") as HTMLInputElement
        const priceInput = form.elements.namedItem("price") as HTMLInputElement
        const descInput = form.elements.namedItem("description") as HTMLInputElement

        const dataObject: MenuDishes = {
            name: nameInput.value,
            price: priceInput.value,
            description: descInput.value,
            img: imgInput.value
        }

        const categoryToUpdate: Array<MenuDishes> = menuData[categoryNameInPath]

        const updatedMenuData: MenuData = {
            ...menuData,
            [categoryNameInPath]: [...categoryToUpdate, dataObject]
        }

        setMenuData(updatedMenuData)
        navigate("/menus/edition-de-menu")
    }

    return (
        <Modal onMouseDown={closeModal}>
            <form onSubmit={handleSubmit} className={m.mainWrapper} onMouseDown={(e) => e.stopPropagation()}>
                <Link to="/menus/edition-de-menu" className={m.mainWrapper__close}>
                    <img src={close} alt="Fermer la modal" />
                </Link>
                <h2 className={m.mainWrapper__title}>Ajoutez vos : {categoryNameInPath}</h2>
                <div className={m.formWrapper}>
                    <h3 className={m.formWrapper__title}>Plat 1</h3>
                    <div className={m.addPhotoWrapper}>
                        <img src={addPhoto} aria-hidden="true" className={m.addPhotoWrapper__img} />
                        <label htmlFor="img" className={m.addPhotoWrapper__label}>+Ajouter photo</label>
                        <input type="file" name="img" id="img" accept="image/png, image/jpeg" className={m.addPhotoWrapper__input} />
                        <span className={m.addPhotoWrapper__format}>max 2mo</span>
                    </div>
                    <div className={m.nameAndPriceWrapper}>
                        <div className={m.inputLabelWrapper}>
                            <label htmlFor="name" className={m.inputLabelWrapper__label}>Nom du plat</label>
                            <input type="text" name="name" id="name" className={m.inputLabelWrapper__input} />
                        </div>
                        <div className={m.inputLabelWrapper}>
                            <label htmlFor="price" className={m.inputLabelWrapper__label}>Prix</label>
                            <input type="number" name="price" id="price" className={m.inputLabelWrapper__input} />
                        </div>
                    </div>
                    <div className={m.inputLabelWrapper}>
                        <label htmlFor="description" className={m.inputLabelWrapper__label}>Description</label>
                        <input type="text" name="description" id="description" className={m.inputLabelWrapper__input} />
                    </div>
                </div>
                <Button content="Valider" type="full" additionnalClass={m.mainWrapper__btn} />
            </form>
        </Modal>
    )
}

export default MenusAddDishe