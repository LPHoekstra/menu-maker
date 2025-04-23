import { Link, useNavigate, useParams } from "react-router"
import Modal from "../../components/Modal"
import m from "./index.module.scss"
import { FormEvent, useState } from "react"
import close from "../../assets/close-dark.svg"
import addPhoto from "../../assets/add-photo.svg"
import Button from "../../components/Button"
import { MenuData, MenuDishes } from "../../@types/menu"
import { useMenuData } from "../../hooks/menuData"
import add from "../../assets/add-cross.svg"

function MenusAddDishe() {
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [numberOfAddedDishes, setNumberOfAddedDishes] = useState<Array<number>>([1])
    const { menuData, setMenuData } = useMenuData()
    const param = useParams()
    const categoryNameInPath = param.categoryName as string // component is not render if no param

    const disheNameInPath = param.disheName
    const disheInPathObject = menuData[categoryNameInPath]?.find((dishe) => dishe.name === disheNameInPath)

    // implement img visualisation of the uploaded photo

    const closeModal = () => {
        navigate("/menus/edition-de-menu")
    }

    const incrementNumberOfDishes = () => {
        const addedNumber = numberOfAddedDishes.length + 1
        const newArray = [...numberOfAddedDishes]
        newArray.push(addedNumber)

        setNumberOfAddedDishes(newArray)
    }

    const deleteFormWrapper = (number: number) => {
        console.log(number)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const imgInput = form.elements.namedItem("img") as HTMLInputElement | RadioNodeList
        const nameInput = form.elements.namedItem("name") as HTMLInputElement | RadioNodeList
        const priceInput = form.elements.namedItem("price") as HTMLInputElement | RadioNodeList
        const descInput = form.elements.namedItem("description") as HTMLInputElement | RadioNodeList

        if (nameInput.value === ""
            // || imgInput.value === ""
            || priceInput.value === ""
            || descInput.value === ""
        ) {
            setErrorMsg("champ invalide")
            return
        }

        const dataObject: MenuDishes = {
            name: nameInput.value,
            price: priceInput.value,
            description: descInput.value,
            img: imgInput.value
        }

        const categoryToUpdate: Array<MenuDishes> = menuData[categoryNameInPath]

        // si l'objet est déjà présent ces nouvelles valeurs son remplacé
        const updatedMenuData: MenuData = {
            ...menuData,
            [categoryNameInPath]: [...categoryToUpdate.filter((object) => object.name !== disheNameInPath), dataObject]
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
                {numberOfAddedDishes.map((number) => (
                    <div key={number} className={m.formWrapper}>
                        <div className={m.headerWrapper}>
                            <h3 className={m.headerWrapper__title}>Plat {number.toString()}</h3>
                            <img src={close} alt="Supprimer le plat" className={m.headerWrapper__close} onClick={() => deleteFormWrapper(number)} />
                        </div>
                        <div className={m.addPhotoWrapper}>
                            <img src={addPhoto} aria-hidden="true" className={m.addPhotoWrapper__img} />
                            <label htmlFor="img" className={m.addPhotoWrapper__label}>+Ajouter photo</label>
                            <input type="file" name="img" id="img" accept="image/png, image/jpeg" className={m.addPhotoWrapper__input} />
                            <span className={m.addPhotoWrapper__format}>max 2mo</span>
                        </div>
                        <div className={m.nameAndPriceWrapper}>
                            <div className={m.inputLabelWrapper}>
                                <label htmlFor="name" className={m.inputLabelWrapper__label}>Nom du plat</label>
                                <input type="text" name="name" id="name" className={m.inputLabelWrapper__input} defaultValue={disheInPathObject?.name} />
                            </div>
                            <div className={m.inputLabelWrapper}>
                                <label htmlFor="price" className={m.inputLabelWrapper__label}>Prix</label>
                                <input type="number" name="price" id="price" className={m.inputLabelWrapper__input} defaultValue={disheInPathObject?.price} />
                            </div>
                        </div>
                        <div className={m.inputLabelWrapper}>
                            <label htmlFor="description" className={m.inputLabelWrapper__label}>Description</label>
                            <input type="text" name="description" id="description" className={m.inputLabelWrapper__input} defaultValue={disheInPathObject?.description} />
                        </div>
                    </div>
                ))}
                <img src={add} alt="Ajouter un plat" onClick={incrementNumberOfDishes} className={m.mainWrapper__addDishe} />
                {errorMsg &&
                    <span className={m.mainWrapper__errorMsg}>{errorMsg}</span>
                }
                <Button content="Valider" type="full" additionnalClass={m.mainWrapper__btn} />
            </form>
        </Modal>
    )
}

export default MenusAddDishe