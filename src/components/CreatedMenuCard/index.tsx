import { Link } from "react-router"
import Button from "../Button"
import { ReactElement, useRef } from "react"
import m from "./index.module.scss"
import { UserMenus } from "../../@types/api"
import apiUser from "../../api/apiUser"

interface CreatedMenuCardProps {
    userMenu: UserMenus
}

function CreatedMenuCard({ userMenu }: CreatedMenuCardProps): ReactElement {
    const ref = useRef<HTMLDivElement | null>(null)

    const handleDelete = async () => {
        try {
            await apiUser.deleteMenu(userMenu.id)

            ref.current?.remove()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <article className={m.mainWrapper} ref={ref}>
            <Link to={`edition-de-menu/${userMenu.id}`}>
                <img src={userMenu.imgLink} alt="" className={m.mainWrapper__img} />
            </Link>
            <p className={m.mainWrapper__creationDate}>Créé le {userMenu.creationDate}</p>
            <Link to={`edition-de-menu/${userMenu.id}`}>
                <Button content="Modifier" type="full" additionnalClass={m.mainWrapper__btn} />
            </Link>
            <span className={m.mainWrapper__delete} onClick={handleDelete}>Supprimer</span>
        </article>
    )
}

export default CreatedMenuCard