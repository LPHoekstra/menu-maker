import { ReactElement } from "react"
import { Navigate, Outlet } from "react-router"

function IsConnected(): ReactElement {
    // const cookie = document.cookie
    // console.log(cookie)

    // if (cookie) {
    //     setIsConnected(true)
    // }

    const isConnected = true

    if (isConnected) {
        return <Outlet />
    }

    return <Navigate to="/" />
}

export default IsConnected