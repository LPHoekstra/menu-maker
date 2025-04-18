import { Link, useNavigate } from "react-router"
import Modal from "../../components/Modal"
import m from "./index.module.scss"
import { FormEvent } from "react"
import close from "../../assets/close.svg"
import Button from "../../components/Button"

const titleMock = "Souvlakis"

function MenusAddDishe() {
    const navigate = useNavigate()

    const closeModal = () => {
        navigate("/menus/edition-de-menu")
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log("plats enregistré")
    }

    return (
        <Modal onMouseDown={closeModal}>
            <form onSubmit={handleSubmit} className={m.mainWrapper}>
                <Link to="/menus/edition-de-menu" className={m.mainWrapper__close}>
                    <img src={close} alt="Fermer la modal" />
                </Link>
                <h2>Ajoutez vos : {titleMock}</h2>
                <div>
                    <h3>Plat 1</h3>
                    <input type="file" name="photo" id="photo" />
                    <div>
                        <div>
                            <label htmlFor="name">Nom du plat</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div>
                            <label htmlFor="price">Prix</label>
                            <input type="number" name="price" id="price" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description" />
                    </div>
                </div>
                <Button content="Valider" type="full" />
            </form>
        </Modal>
    )
}

export default MenusAddDishe