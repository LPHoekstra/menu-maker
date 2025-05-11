import { ReactElement, useEffect, useRef, useState } from "react";
import m from "./index.module.scss"
import { Link } from "react-router";
import CreatedMenuCard from "../../components/CreatedMenuCard";
import { ApiResponse, UserMenus } from "../../@types/api";
import apiUser from "../../api/apiUser";
import { date } from "../../utils/date";

function Menus(): ReactElement {
    // handle error from the fetch
    const [userMenus, setUserMenus] = useState<Array<UserMenus> | undefined>(undefined)
    const [error, setError] = useState<string | null>(null)
    const isFetched = useRef(false)

    useEffect(() => {
        const fetchUserMenus = async () => {
            try {
                const response: ApiResponse<Array<UserMenus>> = await apiUser.getUserMenus()

                // to refactor ?
                const data = response.data
                data.forEach(element => {
                    const creationDate = element.creationDate
                    const onlyYearMonthDay = creationDate.split("T")[0]
                    const splittedDateArray = onlyYearMonthDay.split("-")

                    // change month value
                    const month = date[Number(splittedDateArray[1]) - 1]
                    splittedDateArray[1] = month

                    // change order between year and day
                    splittedDateArray.reverse()

                    element.creationDate = splittedDateArray.join(" ")
                });

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