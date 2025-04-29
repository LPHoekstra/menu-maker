import { EventHandler } from "react"
import m from "./index.module.scss"
import { availableColor } from "../../utils/availableParamMenu"
// import { useMenuData } from "../../hooks/menuData"

interface MenuChangeColorProps {
    setChangeColorOpen: () => void
}

function MenuChangeColor({ setChangeColorOpen }: MenuChangeColorProps) {
    // const { setMenuData } = useMenuData()

    const setColor: EventHandler<React.MouseEvent> = () => {
        setChangeColorOpen()
    }

    return (
        <article className={m.mainWrapper}>
            {availableColor.map((color) => (
                <button key={color}
                    className={m.mainWrapper__colorBtn}
                    style={{ backgroundColor: color }}
                    onClick={setColor}
                ></button>
            ))}
        </article>
    )
}

export default MenuChangeColor