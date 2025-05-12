import { useEffect, useRef } from "react"
import { useParams } from "react-router"
import apiUser from "../../api/apiUser"
import { useMenuData } from "../../hooks/menuData"

function MenuEdit() {
    const { id } = useParams()
    const { setMenuData } = useMenuData()
    const isFetched = useRef<boolean>(false)

    // fetch menu data
    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                if (id) {
                    const response = await apiUser.getMenu(id)

                    setMenuData(response.data)
                }
            } catch (e) {
                console.error(e)
            }
        }

        if (!isFetched.current) {
            isFetched.current = true
            fetchMenuData()
        }
    }, [id, setMenuData])

    return (
        <></>
    )
}

export default MenuEdit