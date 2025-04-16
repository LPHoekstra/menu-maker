import { ReactElement } from "react";
import m from "./index.module.scss"
import { Link } from "react-router";
import menuImgMocked from "../../assets/menu-img-mock.png"
import CreatedMenuCard, { CreatedMenuCardProps } from "../../components/CreatedMenuCard";

const listOfMenusMock: Array<CreatedMenuCardProps> = [
    { id: "123456789", creationDate: "6 juin 2024", imgLink: menuImgMocked },
    { id: "897654231", creationDate: "3 juillet 2024", imgLink: menuImgMocked }
]

function Menus(): ReactElement {
    return (
        <main className={m.main}>
            <h1>Mes menus</h1>
            <section className={m.cardWrapper}>
                {listOfMenusMock.map(({ id, creationDate, imgLink }) => (
                    <CreatedMenuCard key={id} id={id} creationDate={creationDate} imgLink={imgLink} />
                ))}
                <article>
                    <Link to="nouveau-menu" className={m.linkWrapper}>
                        <span className={m.linkWrapper__cross}>+</span>
                        <p className={m.linkWrapper__text}>Ajouter un menu</p>
                    </Link>
                </article>
            </section>
        </main>
    )
}

export default Menus