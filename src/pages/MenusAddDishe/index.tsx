import { Link, useNavigate, useParams } from "react-router"
import Modal from "../../components/Modal"
import m from "./index.module.scss"
import { FormEvent } from "react"
import close from "../../assets/close-dark.svg"
import Button from "../../components/Button"

function MenusAddDishe() {
    const navigate = useNavigate()
    const param = useParams()

    const closeModal = () => {
        navigate("/menus/edition-de-menu")
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log("plats enregistré")
    }

    return (
        <Modal onMouseDown={closeModal}>
            <form onSubmit={handleSubmit} className={m.mainWrapper} onMouseDown={(e) => e.stopPropagation()}>
                <Link to="/menus/edition-de-menu" className={m.mainWrapper__close}>
                    <img src={close} alt="Fermer la modal" />
                </Link>
                <h2 className={m.mainWrapper__title}>Ajoutez vos : {param.categoryName}</h2>
                <div className={m.formWrapper}>
                    <h3 className={m.formWrapper__title}>Plat 1</h3>
                    <input type="file" name="photo" id="photo" />
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