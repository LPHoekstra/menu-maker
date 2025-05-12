import { ReactElement, useEffect, useRef, useState } from "react";
import m from "./index.module.scss"
import { Link } from "react-router";
import CreatedMenuCard from "../../components/CreatedMenuCard";
import { ApiResponse, UserMenus } from "../../@types/api";
import apiUser from "../../api/apiUser";
import { monthDate } from "../../utils/date";

function Menus(): ReactElement {
    // handle error from the fetch
    const [userMenus, setUserMenus] = useState<Array<UserMenus> | undefined>(undefined)
    const [error, setError] = useState<string | null>(null)
    const isFetched = useRef(false)

    useEffect(() => {
        const fetchUserMenus = async () => {
            try {
                const response: ApiResponse<Array<UserMenus>> = await apiUser.getUserMenus()

                const data: Array<UserMenus> = response.data.map(element => {
                    const date: Date = new Date(element.creationDate)
                    const day = date.getDate()
                    const month = monthDate[date.getMonth()]
                    const year = date.getFullYear()

                    return {
                        ...element,
                        creationDate: `${day} ${month} ${year}`
                    }
                })

                setUserMenus(data)
            } catch (e: unknown) {
                if (e instanceof Error) {
                    setError(e.message)
                }
            }
        }

        if (!isFetched.current) {
            isFetched.current = true
            fetchUserMenus()
        }
    }, [])


    return (
        <main className={m.main}>
            <h1>Mes menus</h1>
            {error && <span>{error}</span>}
            <section className={m.cardWrapper}>
                {userMenus && userMenus.map(userMenu => (
                    <CreatedMenuCard key={userMenu.id} userMenu={userMenu} />
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