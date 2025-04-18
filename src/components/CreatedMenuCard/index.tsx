import { Link } from "react-router"
import Button from "../Button"
import { ReactElement, useRef } from "react"
import m from "./index.module.scss"
import { UserMenus } from "../../@types/api"
import apiUser from "../../api/apiUser"

function CreatedMenuCard({ id, creationDate, imgLink }: UserMenus): ReactElement {
    const ref = useRef<HTMLDivElement | null>(null)

    const handleDelete = async () => {
        try {
            await apiUser.deleteMenu(id)

            ref.current?.remove()
        } catch (error) {
            console.error(error)
        }
    }

    // create a string date from creationDate props ex: 9 juin 2024 

    return (
        <article className={m.mainWrapper} ref={ref}>
            <Link to={`edition-de-menu/${id}`}>
                <img src={imgLink} alt="" className={m.mainWrapper__img} />
            </Link>
            <p className={m.mainWrapper__creationDate}>Créé le {creationDate}</p>
            <Link to={`edition-de-menu/${id}`}>
                <Button content="Modifier" type="full" additionnalClass={m.mainWrapper__btn} />
            </Link>
            <span className={m.mainWrapper__delete} onClick={handleDelete}>Supprimer</span>
        </article>
    )
}

export default CreatedMenuCard