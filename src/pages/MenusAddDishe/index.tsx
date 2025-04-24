import { Link, useNavigate, useParams } from "react-router"
import Modal from "../../components/Modal"
import m from "./index.module.scss"
import { FormEvent, useState } from "react"
import close from "../../assets/close-dark.svg"
import Button from "../../components/Button"
import { MenuData, MenuDishes } from "../../@types/menu"
import { useMenuData } from "../../hooks/menuData"
import add from "../../assets/add-cross.svg"
import InputFormAddDishes from "../../components/InputFormAddDishes"

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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const formWrapperClassName = "_formWrapper_18czy_1"
        const formWrapper = form.querySelectorAll("." + formWrapperClassName)

        const newDishesArray: Array<MenuDishes> = []

        try {
            formWrapper.forEach((wrapper) => {
                const imgInput = wrapper.querySelector("#img") as HTMLInputElement
                const nameInput = wrapper.querySelector("#name") as HTMLInputElement
                const priceInput = wrapper.querySelector("#price") as HTMLInputElement
                const descInput = wrapper.querySelector("#description") as HTMLInputElement

                if (nameInput.value === ""
                    // || imgInput.value === ""
                    || priceInput.value === ""
                    || descInput.value === ""
                ) {
                    throw new Error("champ invalide")
                }

                const dataObject: MenuDishes = {
                    name: nameInput.value,
                    price: priceInput.value,
                    description: descInput.value,
                    img: imgInput.value
                }

                newDishesArray.push(dataObject)
            })

            if (!errorMsg) return

            const categoryToUpdate: Array<MenuDishes> = menuData[categoryNameInPath]

            const updatedMenuData: MenuData = {
                ...menuData,
                [categoryNameInPath]: [...categoryToUpdate.filter((object) => object.name !== disheNameInPath), ...newDishesArray]
            }

            setMenuData(updatedMenuData)

            navigate("/menus/edition-de-menu")
        } catch (e) {
            setErrorMsg("champ invalide")
            console.error(e)
        }
    }

    return (
        <Modal onMouseDown={closeModal}>
            <form onSubmit={handleSubmit} className={m.mainWrapper} onMouseDown={(e) => e.stopPropagation()}>
                <Link to="/menus/edition-de-menu" className={m.mainWrapper__close}>
                    <img src={close} alt="Fermer la modal" />
                </Link>
                {disheNameInPath ?
                    <h2 className={m.mainWrapper__title}>Modifiez vos : {disheNameInPath}</h2>
                    :
                    <h2 className={m.mainWrapper__title}>Ajoutez vos : {categoryNameInPath}</h2>
                }
                {numberOfAddedDishes.map((number) => (
                    <InputFormAddDishes key={number} disheNumber={number} disheInPathObject={disheInPathObject} />
                ))}
                {!disheNameInPath &&
                    <img src={add} alt="Ajouter un plat" onClick={incrementNumberOfDishes} className={m.mainWrapper__addDishe} />
                }
                {errorMsg &&
                    <span className={m.mainWrapper__errorMsg}>{errorMsg}</span>
                }
                <Button content="Valider" type="full" additionnalClass={m.mainWrapper__btn} />
            </form>
        </Modal>
    )
}

export default MenusAddDishe