import { Link } from "react-router"
import Button from "../Button"
import { ReactElement } from "react"
import m from "./index.module.scss"

export interface CreatedMenuCardProps {
    id: string
    creationDate: string
    imgLink: string
}

function CreatedMenuCard({ id, creationDate, imgLink }: CreatedMenuCardProps): ReactElement {
    const handleDelete = () => {
        console.log("delete from api")
    }

    return (
        <article className={m.mainWrapper}>
            <Link to={id}>
                <img src={imgLink} alt="" className={m.mainWrapper__img} />
            </Link>
            <p className={m.mainWrapper__creationDate}>Créé le {creationDate}</p>
            <Link to={id}>
                <Button content="Modifier" type="full" additionnalClass={m.mainWrapper__btn} />
            </Link>
            <span className={m.mainWrapper__delete} onClick={handleDelete}>Supprimer</span>
        </article>
    )
}

export default CreatedMenuCard