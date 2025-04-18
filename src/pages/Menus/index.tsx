import { ReactElement, useEffect, useState } from "react";
import m from "./index.module.scss"
import { Link } from "react-router";
import CreatedMenuCard from "../../components/CreatedMenuCard";
import { ApiResponse, UserMenus } from "../../@types/api";
import apiUser from "../../api/apiUser";
// import menuImgMocked from "../../assets/menu-img-mock.png"

// const listOfMenusMock: Array<UserMenus> = [
//     { id: "123456789", creationDate: "6 juin 2024", imgLink: menuImgMocked },
//     { id: "897654231", creationDate: "3 juillet 2024", imgLink: menuImgMocked }
// ]

function Menus(): ReactElement {
    // handle error from the fetch
    const [userMenus, setUserMenus] = useState<Array<UserMenus> | undefined>(undefined)

    useEffect(() => {
        const fetchUserMenus = async () => {
            try {
                const response: ApiResponse<Array<UserMenus>> = await apiUser.getUserMenus()
                setUserMenus(response.data)
            } catch (e) {
                console.error(e)
                setUserMenus(undefined)
            }
        }

        fetchUserMenus()
    }, [])

    return (
        <main className={m.main}>
            <h1>Mes menus</h1>
            <section className={m.cardWrapper}>
                {userMenus && userMenus.map(({ id, creationDate, imgLink }: UserMenus) => (
                    <CreatedMenuCard key={id} id={id} creationDate={creationDate} imgLink={imgLink} />
                ))}
                <article>
                    <Link to="edition-de-menu" className={m.linkWrapper}>
                        <span className={m.linkWrapper__cross}>+</span>
                        <p className={m.linkWrapper__text}>Ajouter un menu</p>
                    </Link>
                </article>
            </section>
        </main>
    )
}

export default Menus